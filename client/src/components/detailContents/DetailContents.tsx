import { useNavigate } from 'react-router-dom';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';

export default function DetailContents({ data, handleDeleteModal, id, writerId, viewerId }: any) {
  const navigate = useNavigate();

  const moveToEdit = () => {
    navigate(`/boards/edit/${id}`);
  };
  console.log(data);
  

  return (
    <DetailCntContainer>
      <h1>{data.title}</h1>
      <hr />
      <p>{data.content}</p>
      <hr />
      {writerId === viewerId ? (
        <EDBtnContainer>
          <PurpleBtn onClick={moveToEdit}>Edit</PurpleBtn>
          <PurpleBtn onClick={handleDeleteModal}>Delete</PurpleBtn>
        </EDBtnContainer>
      ) : ''}
    </DetailCntContainer>
  );
}
