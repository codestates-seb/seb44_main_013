import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebSection from '@/components/home-section/web-section/WebSection';
import AppSection from '@/components/home-section/app-section/AppSection';
import AnimationSection from '@/components/home-section/animation-section/AnimationSection';
import GraphicDesignSection from '@/components/home-section/graphic-section/GraphicDesignSection';
import PhotographySection from '@/components/home-section/photography-section/PhotographySection';
import DisplaySection from '@/components/home-section/display-section/DisplaySection';
import { LandingPageWrapper } from './LandingPage.styled';

const blurOutExpandFwd = keyframes`
  0% {
    transform: scale(1);
    filter: blur(0.01);
    letter-spacing: normal;
  }
  100% {
    transform: scale(1);
    filter: blur(12px) opacity(0%);
    letter-spacing: 5vw;  // This line has been modified
  }
`;

const FullPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PortfollyText = styled.h1`
  font-size: 5em;
  color: #ff86ff;
  background: #050801;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  text-align: center;

  animation: ${blurOutExpandFwd} 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export default function LandingPage() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 300,
      });
    };

    const handleAnimationEnd = () => {
      setAnimationComplete(true);
    };

    const textElement = document.getElementById('portfolly-text');
    textElement &&
      textElement.addEventListener('animationend', handleAnimationEnd);

    window.addEventListener('load', initializeAOS);

    return () => {
      window.removeEventListener('load', initializeAOS);
      textElement &&
        textElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <LandingPageWrapper>
      <FullPageContainer>
        <PortfollyText id="portfolly-text">Portfolly</PortfollyText>
      </FullPageContainer>
      {animationComplete && (
        <>
          <WebSection />
          <AppSection />
          <AnimationSection />
          <GraphicDesignSection />
          <PhotographySection />
          <DisplaySection />
        </>
      )}
    </LandingPageWrapper>
  );
}
