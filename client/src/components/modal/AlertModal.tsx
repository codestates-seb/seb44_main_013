//0718 경고창 모달 혜진
import { ModalContainer, ModalContent } from './Modal.styled';
import { DeleteCancelButton } from '@/commons/atoms/buttons/Button.styled';

export interface ModalProps {
    onConfirm: () => void;
    onCancel: () => void;
  }

export default function AlertModal({ onCancel}:ModalProps) {
    //나중에 props로 안에 내용 컨트롤 할 수 있을 것 같음.
    return(
        <ModalContainer>
            <ModalContent>
                <h1 className="text-black">member Role</h1>
                <p className="text-black">역할을 선택해주십시오.</p>
                <div>
                    <DeleteCancelButton onClick={onCancel}>선택하기</DeleteCancelButton>
                </div>
            </ModalContent>
        </ModalContainer>
    )
}