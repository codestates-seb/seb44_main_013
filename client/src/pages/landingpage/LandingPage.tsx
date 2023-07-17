import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import WebImg from '../../assets/WebItem1.png';
import AppImg from '../../assets/appImg.png';
import AniImg from '../../assets/3DImg.png';
import GraphicImg from '../../assets/graphinImg.png';
import PhotoImg from '../../assets/photoImg.png';

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: `url(${WebImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 data-aos="fade-up">Web</h1>
      </div>
      <div
        data-aos="fade-up"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: `url(${AppImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 data-aos="fade-up">App</h1>
      </div>
      <div
        data-aos="fade-up"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: `url(${AniImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 data-aos="fade-up">3D/Animation</h1>
      </div>
      <div
        data-aos="fade-up"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: `url(${GraphicImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 data-aos="fade-up">Graphic Design</h1>
      </div>
      <div
        data-aos="fade-up"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundImage: `url(${PhotoImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <h1 data-aos="fade-up">Photo/Movie</h1>
      </div>
    </div>
  );
}
