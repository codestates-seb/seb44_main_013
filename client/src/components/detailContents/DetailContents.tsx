import { useNavigate } from 'react-router-dom';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';
import {BackToListButton} from '@/commons/atoms/buttons/Button.styled';
import { DetailCntContainer, EDBtnContainer } from './DetailContents.styled';
import { CommuProps } from '@/types';

interface DetailContentsProps {
  data: CommuProps;
  handleDeleteModal: () => void;
  id: string | undefined;
  writerId: number;
  viewerId: number;
}

export default function DetailContents({ data, handleDeleteModal, id, writerId, viewerId }: DetailContentsProps) {
  const navigate = useNavigate();

  const moveToEdit = () => {
    navigate(`/boards/edit/${id}`);
  };
  console.log(data);

  const dataDivision = data.division;

  const moveToCommunityList = () => {
    navigate(`/boards?division=${dataDivision}`)
  };
  

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
      <BackToListButton onClick={moveToCommunityList}>목록으로</BackToListButton>
    </DetailCntContainer>
  );
}
