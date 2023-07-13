/* 2023-07-06 React Quill Editor - 김다함 */
import { styled } from 'styled-components';
import tw from 'twin.macro';
import { memo, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
<<<<<<< HEAD
=======
import { QuillPropsType } from '@/types';
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d

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
<<<<<<< HEAD
    max-height: calc(100vh - 60px);
  }
`

const QuillEditor = memo(() => {
=======
    width: 1000px;
    height: calc(100vh - 60px);
  }
`

const QuillEditor = memo(({ htmlContent, setContentHandler }: QuillPropsType) => {
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
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
<<<<<<< HEAD
        // onChange={}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Writing Something...'}
=======
        value={htmlContent}
        onChange={(content) => setContentHandler(content)}
        modules={modules}
        theme="snow"
        style={{ height: '100%', marginBottom: '0' }}
        placeholder={'Write Something...'}
>>>>>>> 366484dbb3bd8e1e3ffb25a060debf2dda90b01d
      />
    </QuillWrapper>
  )
})

export default QuillEditor;