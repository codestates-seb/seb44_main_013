import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { WebItemsContainer } from './Main.styled';

export default function Main() {
  return (
    <>
      <CategoryNavBar />
      <WebItemsContainer>
        {Array.from({length:4}).map((_, index) => {
          return (
            <WebItem key={index}/>
          )
        })}
      </WebItemsContainer>
    </>
  );
}
