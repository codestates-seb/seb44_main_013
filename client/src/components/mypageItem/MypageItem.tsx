import { Link } from 'react-router-dom';
import { MypageItemProps } from '@/types';
import ImgSection, { ImgInfoSection, SMportItemWrapper } from './MypageItem.styled';

//07.05 혜진 마이페이지 내 포폴 관리 아이템
export default function MypageItem({ portfolio }: MypageItemProps) {
  const { title, name, pictures, portfolioId } = portfolio;
  const imageSrc = pictures.length ? pictures[0].pictureUrl : 'defaultImageUrl';

  return (
    <Link to={`/portfolios/${portfolioId}`}>
      <SMportItemWrapper>
        <ImgSection style={{ width: '190px', height: '180px' }} src={imageSrc} />
        <ImgInfoSection title={title} name={name} />
      </SMportItemWrapper>
    </Link>
  );
}
