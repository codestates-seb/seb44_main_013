/* 2023-07-06 React Quill Editor - 김다함 */
import { memo, useMemo, useRef } from 'react';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';

import useImageHandler from '@/hooks/useImageHandler';

import { QuillWrapper } from '@/components/editor/Editor.styled';
import { Quill } from '@/types';

const QuillEditor = memo(({ htmlContent, setContentHandler, isTitleFormOpen }: Quill) => {
  const [imageUrlHandler, imageHandler] = useImageHandler();
  const quillRef = useRef<ReactQuill>();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ color: [] }, { 'background': [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ['link'],
          ['image', 'video'],
          ['clean']
        ],
        handlers: {
          imageUrl: () => imageUrlHandler(quillRef.current?.getEditor()),
          image: () => imageHandler(quillRef.current?.getEditor()),
        },
      },
    }), []);

  return (
    <QuillWrapper isTitleFormOpen={isTitleFormOpen} >
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            quillRef.current = element;
          }
        }}
        value={htmlContent}
        onChange={(content) => setContentHandler(content)}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
      />
    </QuillWrapper>
  )
})

export default QuillEditor;