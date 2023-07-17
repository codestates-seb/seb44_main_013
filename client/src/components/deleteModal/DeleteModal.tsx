import { DeleteModalContainer, DeleteModalContent } from './DeleteModal.styled';
import DeleteButton from '@/commons/atoms/buttons/PurpleBtn';
import { DeleteCancelButton } from '@/commons/atoms/buttons/Button.styled';

interface DeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}
export default function DeleteModal({ onConfirm, onCancel }: DeleteModalProps) {
  // 삭제 버튼에서 delete 요청하기
  return (
    <DeleteModalContainer>
      <DeleteModalContent>
        <h1>삭제</h1>
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <DeleteButton onClick={onConfirm}>삭제하기</DeleteButton>
          <DeleteCancelButton onClick={onCancel}>취소하기</DeleteCancelButton>
        </div>
      </DeleteModalContent>
    </DeleteModalContainer>
  );
}
