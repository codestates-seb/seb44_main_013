import CHeader from '../../atoms/header/CHeader';
import Footer from '../../atoms/footer/Footer';
import { Outlet } from 'react-router-dom';
import { BackImgWrapper } from './Layout.styled';

export default function CHeaderLayout() {
  return (
    <BackImgWrapper>
      <CHeader />
      <Outlet />
      <Footer />
    </BackImgWrapper>
  );
}
