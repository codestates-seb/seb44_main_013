import CHeader from '@/commons/atoms/header/CHeader';
import {
  EditorContainer,
  Guide,
  SaveBtnContainer,
  TextEditor,
} from './Community.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

export default function Community() {
  return (
    <>
      <CHeader />
      <EditorContainer>
        <TextEditor></TextEditor>
        <Guide />
      </EditorContainer>
      <SaveBtnContainer>
        <PurpleBtn>Save</PurpleBtn>
      </SaveBtnContainer>
    </>
  );
}
