import Footer from '@/commons/Footer';
import Header from '@/commons/atoms/header/Header';
import CategoryNavBar from '@/commons/atoms/navbar/CategoryNavBar';
import WebItem from '@/components/WebItem';

export default function Main() {
  return (
    <>
      <Header />
      <CategoryNavBar />
      <WebItem />
      <Footer />
    </>
  );
}
