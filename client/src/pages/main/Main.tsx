import { Link } from 'react-router-dom';
import CategoryNavBar from '@/components/navbar/CategoryNavBar';
import WebItem from '@/components/webItem/WebItem';
import { StyledBackground, WebItemsContainer } from './Main.styled';
//import { WholeWrapper } from '@/commons/styles/MainLayout';
import '../../index.css';

export default function Main() {
  return (
    <StyledBackground>
      <CategoryNavBar />
      <WebItemsContainer>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <Link to="portfolio/detail"><WebItem key={index}/></Link>
          )
        })}
      </WebItemsContainer>
    </StyledBackground>
  );
}
