/* 2023-07-06 React Quill Editor - 김다함 */
import { useDispatch, useSelector } from 'react-redux';
import { memo, useMemo, useRef } from 'react';
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';

import { Quill } from '@/types';
import { portfolio, setHtmlContent } from '@/store/portfolioSlice';
import useImageHandler from '@/hooks/useImageHandler';

import { QuillWrapper } from '@/components/editor/Editor.styled';

const QuillEditor = memo(({ isTitleFormOpen }: Quill) => {
  const [imageUrlHandler, imageHandler] = useImageHandler();
  const savedPortfolio = useSelector(portfolio);
  const quillRef = useRef<ReactQuill>();
  const dispatch = useDispatch();

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { 'background': [] }],
          ['link'],
          ['image', 'video'],
          ['clean']
        ],
        handlers: {
          imageUrl: () => imageUrlHandler(quillRef.current?.getEditor()),
          image: () => imageHandler(quillRef.current?.getEditor()),
          // video: () => videoHandler(quillRef.current?.getEditor()),
        },
      },
    }), []);

  return (
    <QuillWrapper isTitleFormOpen={isTitleFormOpen} >
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            quillRef.current = element;
            console.log(savedPortfolio.content)
          }
        }}
        value={savedPortfolio.content}
        onChange={(content) => dispatch(setHtmlContent(content))}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
      />
    </QuillWrapper>
  )
})

export default QuillEditor;