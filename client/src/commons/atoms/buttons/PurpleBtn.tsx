import { Purpletype } from './Button.styled';

interface PurpleBtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

//기본 퍼플 타입 버튼
//children 안에 원하는 글자를 작성하면 됩니다.
export default function PurpleBtn({ onClick, children }: PurpleBtnProps) {
  return <Purpletype onClick={onClick}>{children}</Purpletype>;
}
