import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';

export default function DetailContents( {data}:any ) {

  return (
    <DetailCntContainer>
      <h1>{data.title}</h1>
      <hr />
      <p>{data.content}</p>
      <hr />
      <EDBtnContainer>
        <PurpleBtn>Edit</PurpleBtn>
        <PurpleBtn>Delete</PurpleBtn>
      </EDBtnContainer>
    </DetailCntContainer>
  );
}
