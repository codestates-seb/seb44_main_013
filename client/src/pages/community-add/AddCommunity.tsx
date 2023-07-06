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
  return (
    <>
      <CHeader />
      <EditorContainer>
        <TextEditor>
          <ReactQuill theme="snow" style={{ height: '40rem' }} />
        </TextEditor>
        <Guide />
      </EditorContainer>
      <SaveBtnContainer>
        <PurpleBtn>Save</PurpleBtn>
      </SaveBtnContainer>
    </>
  );
}
