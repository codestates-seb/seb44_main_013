import CHeader from '../../../components/header/CHeader';
import Footer from '../../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { DefaultImgWrapper } from './Layout.styled';

export default function CHeaderLayout() {
  return (
    <DefaultImgWrapper>
      <CHeader />
      <Outlet />
      <Footer />
    </DefaultImgWrapper>
  );
}
