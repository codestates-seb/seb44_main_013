import Footer from '@/commons/atoms/footer/Footer';
import Header from '@/commons/atoms/header/Header';
import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';

export default function Main() {
  return (
    <>
      <Header />
      <CategoryNavBar />
      <WebItemsContainer>
        {Array.from({length:4}).map((_, index) => {
          return (
            <WebItem key={index}/>
          )
        })}
      </WebItemsContainer>
      {/* <WebItemsContainer>
        <WebItem />
        <WebItem />
      </WebItemsContainer>
      <WebItemsContainer>
        <WebItem />
        <WebItem />
      </WebItemsContainer> */}
      <Footer />
    </>
  );
}
