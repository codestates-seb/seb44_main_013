// LandingPage.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebSection from '@/components/section/web-section/WebSection';
import AppSection from '@/components/section/app-section/AppSection';
import AnimationSection from '@/components/section/animation-section/AnimationSection';
import GraphicDesignSection from '@/components/section/graphic-section/GraphicDesignSection';
import PhotographySection from '@/components/section/photography-section/PhotographySection';

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      offset: 100, // 애니메이션 시작 시점을 더 빠르게 설정
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <div>
      <WebSection />
      <AppSection />
      <AnimationSection />
      <GraphicDesignSection />
      <PhotographySection />
    </div>
  );
}
