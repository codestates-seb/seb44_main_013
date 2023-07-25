import styled, { keyframes } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BlackSection from '@/components/home-section/black-section/BlackSection';
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

const scrollDown = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(15px);
  }
  60% {
    transform: translateY(10px);
  }
`;

const ScrollDownIndicator = styled.div`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  color: #fff;
  font-size: 3em;
  opacity: 0.7;
  animation: ${scrollDown} 2s infinite;
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
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setAnimationComplete(true);
    };

    const textElement = document.getElementById('portfolly-text');
    if (textElement) {
      textElement.addEventListener('animationend', handleAnimationEnd);

      return () => {
        textElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollHint(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out',
      delay: 300,
    });
  }, []);

  return (
    <LandingPageWrapper>
      <FullPageContainer>
        <PortfollyText id="portfolly-text">Portfolly</PortfollyText>
      </FullPageContainer>
      {animationComplete && showScrollHint && (
        <ScrollDownIndicator>&#8595;</ScrollDownIndicator>
      )}
      {animationComplete && (
        <>
          <BlackSection />
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
