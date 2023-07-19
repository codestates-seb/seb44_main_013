import { useNavigate } from 'react-router-dom';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';

export default function DetailContents( {data, handleDeleteModal, id}:any ) {
  const navigate = useNavigate();

  const moveToEdit = () => {
    navigate(`/boards/edit/${id}`)
  }

  return (
    <DetailCntContainer>
      <h1>{data.title}</h1>
      <hr />
      <p>{data.content}</p>
      <hr />
      <EDBtnContainer>
        <PurpleBtn onClick={moveToEdit}>Edit</PurpleBtn>
        <PurpleBtn onClick={handleDeleteModal}>Delete</PurpleBtn>
      </EDBtnContainer>
    </DetailCntContainer>
  );
}
