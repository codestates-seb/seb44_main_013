import CHeader from '../../../components/header/CHeader';
import Footer from '../../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { BackImgControl } from './Layout.styled';

export default function CHeaderLayout() {
  return (
    <BackImgControl>
      <CHeader />
      <Outlet />
      <Footer />
    </BackImgControl>
  );
}
