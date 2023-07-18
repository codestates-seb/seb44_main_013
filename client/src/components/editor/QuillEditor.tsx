/* 2023-07-06 React Quill Editor - 김다함 */
import { memo, useMemo, useRef } from 'react';
import { styled } from 'styled-components';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import tw from 'twin.macro';

import { Quill } from '@/types';
import useImageHandler from '@/hooks/useImageHandler';

const QuillWrapper = styled.div`
${tw`z-10 absolute border-0 top-0`}
  .ql-toolbar {
    padding: 17px 0;
    background-color: #252525;
    border: 0;
    text-align: center;
  }
  .ql-stroke, .ql-fill {
    stroke: white;
  }
  .ql-picker-label {
    color: white;
  }
  .ql-container{
    border: 0;
  }
  .ql-editor{
    width: 1000px;
    height: calc(100vh - 60px);
  }
`

const QuillEditor = memo(({ htmlContent, setContentHandler }: Quill) => {
  const quillRef = useRef<ReactQuill>();
  const [imageUrlHandler, imageHandler] = useImageHandler();

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
    <QuillWrapper>
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