import Footer from '@/commons/atoms/footer/Footer';
import Header from '@/commons/atoms/header/Header';
import CategoryNavBar from '@/commons/atoms/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';

export default function Main() {
  return (
    <>
      <Header />
      <CategoryNavBar />
      <WebItemsContainer>
        <WebItem />
        <WebItem />
      </WebItemsContainer>
      <WebItemsContainer>
        <WebItem />
        <WebItem />
      </WebItemsContainer>
      <Footer />
    </>
  );
}
