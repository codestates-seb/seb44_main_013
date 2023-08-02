import { PagenationBtn } from './Pagenation.styled';
import { childrenProps } from '@/types';

// interface PagenationProps extends childrenProps {
//   onClick: () => void;
//   isActive: boolean;
// }

export function Pagenation({
  children,
  onClick,
  isActive,
}: childrenProps & { onClick: () => void; isActive: boolean }) {
  return (
    <PagenationBtn onClick={onClick} className={isActive ? 'active' : ''}>
      {children}
    </PagenationBtn>
  );
}
