import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebSection from '@/components/home-section/web-section/WebSection';
import AppSection from '@/components/home-section/app-section/AppSection';
import AnimationSection from '@/components/home-section/animation-section/AnimationSection';
import GraphicDesignSection from '@/components/home-section/graphic-section/GraphicDesignSection';
import PhotographySection from '@/components/home-section/photography-section/PhotographySection';
import PortfollyBtn from '@/commons/atoms/portfolly/PortfollyBtn';
import { MouseEffect } from '@/commons/atoms/portfolly/MouseEffect';

export default function LandingPage() {
  useEffect(() => {
    const initializeAOS = () => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 300,
      });
    };

    window.addEventListener('load', initializeAOS);

    return () => {
      window.removeEventListener('load', initializeAOS);
    };
  }, []);

  return (
    <div>
      <WebSection />
      <AppSection />
      <AnimationSection />
      <GraphicDesignSection />
      <PhotographySection />
      <PortfollyBtn />
    </div>
  );
}
