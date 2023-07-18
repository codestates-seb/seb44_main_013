import CHeader from '../../../components/header/CHeader';
import Footer from '../../../components/footer/Footer';
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
