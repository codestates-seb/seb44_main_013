import 'aos/dist/aos.css';
import { 
  SectionWrapper,
  CommunityContents,
  CommunityImage,
} from './CommunitySection.styled';
import communityExampleImage from '@/assets/whiteNoImg.png';
import PurpleBtn from '@/commons/atoms/buttons/PurpleBtn';

export default function PortfolioSection() {
  return (
    <SectionWrapper>
      <CommunityImage src={communityExampleImage} alt='CommunityExampleImage' />
      <CommunityContents>
        <h1>공고와 협업을 확인해보세요!</h1>
        <p>기업의 공고와 다른 프리랜서의 협업 커뮤니티를 활용해 <br /> 다른 사람들과 소통할 수 있어요.</p>
        <div><PurpleBtn>커뮤니티 보러가기</PurpleBtn></div>
      </CommunityContents>
    </SectionWrapper>
  );
}