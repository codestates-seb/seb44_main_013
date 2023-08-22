// import styled, { keyframes } from 'styled-components';
// import { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import PortfolioSection from '@/components/home-section/portfolio-section/PortfolioSection';
import CommunitySection from '@/components/home-section/community-section/CommunitySection';
// import AnimationSection from '@/components/home-section/animation-section/AnimationSection';
// import GraphicDesignSection from '@/components/home-section/graphic-section/GraphicDesignSection';
// import PhotographySection from '@/components/home-section/photography-section/PhotographySection';
// import DisplaySection from '@/components/home-section/display-section/DisplaySection';
import { HomeWrapper, HomeContentsWrapper } from './LandingPage.styled';
// import SkipButton from '@/commons/atoms/buttons/skip/SkipButton';
import Header from '@/components/header/Header';


export default function LandingPage() {
  // const [animationComplete, setAnimationComplete] = useState(false);
  // const [showScrollHint, setShowScrollHint] = useState(true);

  // useEffect(() => {
  //   const handleAnimationEnd = () => {
  //     setAnimationComplete(true);
  //   };

  //   const textElement = document.getElementById('portfolly-text');
  //   if (textElement) {
  //     textElement.addEventListener('animationend', handleAnimationEnd);

  //     return () => {
  //       textElement.removeEventListener('animationend', handleAnimationEnd);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowScrollHint(false);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     delay: 300,
  //   });
  // }, []);

  return (
    <HomeWrapper>
      {/* <FullPageContainer>
        <PortfollyText id="portfolly-text">Portfolly</PortfollyText>
      </FullPageContainer>
      
      {animationComplete && (
        <>
          
          {animationComplete && showScrollHint && 
            <ScrollDownIndicator>&#8595;</ScrollDownIndicator>
          }
          <AppSection />
          <AnimationSection />
          <GraphicDesignSection />
          <PhotographySection />
          <DisplaySection />
        </>
      )}
      <SkipButton /> */}
      <Header />
      <HomeContentsWrapper>
        <PortfolioSection />
        <CommunitySection />
      </HomeContentsWrapper>
    </HomeWrapper>
  );
}
