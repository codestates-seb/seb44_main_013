import { ModalProps } from '@/components/modal/DeleteModal.tsx';

import { DeleteCancelButton } from '@/commons/atoms/buttons/Button.styled';
import { ModalContainer, ModalContent } from './Modal.styled';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

export default function BackModal({ onConfirm, onCancel }: ModalProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <h1>현재 페이지에서 나가시겠습니까?</h1>
        <p>작성 내용이 저장되지 않습니다.</p>
        <div>
          <DeleteCancelButton onClick={onCancel}>머무르기</DeleteCancelButton>
          <PurpleBtn onClick={onConfirm}>이동하기</PurpleBtn>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}