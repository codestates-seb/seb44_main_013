import CHeader from '@/commons/atoms/header/CHeader';
import {
  EditorContainer,
  Guide,
  SaveBtnContainer,
  TextEditor,
} from './AddCommunity.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

export default function AddCommunity() {
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image', 'video'],
    ],
  };

  return (
    <>
      <CHeader />
      <EditorContainer>
        <TextEditor>
          <ReactQuill
            theme="snow"
            style={{
              height: '40rem',
            }}
            modules={modules}
          />
          <SaveBtnContainer>
            <PurpleBtn>Save</PurpleBtn>
          </SaveBtnContainer>
        </TextEditor>
        <Guide />
      </EditorContainer>
    </>
  );
}
