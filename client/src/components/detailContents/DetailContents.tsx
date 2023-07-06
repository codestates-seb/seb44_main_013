import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';

export default function DetailContents() {
  return (
    <DetailCntContainer>
      <h1>Title</h1>
      <hr />
      <p>Contents</p>
      <hr />
      <EDBtnContainer>
        <PurpleBtn>Edit</PurpleBtn>
        <PurpleBtn>Delete</PurpleBtn>
      </EDBtnContainer>
    </DetailCntContainer>
  );
}
