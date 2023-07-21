import {
  SectionWrapper,
  IntroducePortfolly,
  CircleForDisplay,
  GalleyWrapper,
  GalleyList,
  PortFollyButtonWrapper,

} from './DisplaySection.styled';
import { Element } from 'react-scroll';

import PortfollyBtn from '@/commons/atoms/portfolly/PortfollyBtn';


import appImg from '@/assets/appImg.png';
import photoImg from '@/assets/photoImg.png';
import webImg from '@/assets/WebItem1.png';
import graphinImg from '@/assets/graphinImg.png';
import drawImg from '@/assets/PortfolioImage2.png';

const DisplayWrapper = () => {


  return (
    <Element name='displaySection'>
      <SectionWrapper>
        <PortFollyButtonWrapper data-aos='fade' data-aos-delay='3000'>
          <PortfollyBtn/>
        </PortFollyButtonWrapper>
        <div className='IntroduceWrapper' data-aos='fade-up'>
          <IntroducePortfolly >You can display your own</IntroducePortfolly>
          <CircleForDisplay className='galleyTop'></CircleForDisplay>
          <GalleyWrapper>
            <GalleyList src={webImg} alt='webImg' />
            <GalleyList src={appImg} alt='appImg' />
            <GalleyList src={photoImg} alt='photoImg' />
            <GalleyList src={graphinImg} alt='graphinImg' />
            <GalleyList src={drawImg} alt='drawImg' />
          </GalleyWrapper>
          <CircleForDisplay className='galleyBottom'></CircleForDisplay>
          <IntroducePortfolly>in our Portfolly</IntroducePortfolly>
        </div>
      </SectionWrapper>
    </Element>
  );
};

export default DisplayWrapper;