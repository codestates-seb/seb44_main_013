import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import appImg from '@/assets/appImg.png';
import photoImg from '@/assets/photoImg.png';
import webImg from '@/assets/WebItem1.png';
import graphinImg from '@/assets/graphinImg.png';
import drawImg from '@/assets/PortfolioImage2.png';

export const GisunWrapper = styled.div`
  background-color: #111;
  width: 100vw;
  height: 100%;
`;



export const GisunContent = styled.div`
  width: 100vw;
  height: 800px;
  position: relative;
  /* border: 1px solid pink; */

  .이미지 {
    width: 350px;
    height: 100%;
    position: absolute;
    right: 20%;
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: 0.3s;
  }

  .webImage {
    width: 500px;
  }

  .appImage {
    right: 30%;
    width: 400px;
    height: 90%;
    top: 5%;
  }

  .photoImage {
    width: 700px;
    left: 15%;
  }

  .graphinImg {
    width: 800px;
    height: 90%;
    left: 15%;
    top: 5%;
  }

  .drawImg {
    width: 60%;
    height: 90%;
    left: 40%;
    top: 5%;
  }

  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      transform: translateX(100%);
      opacity: 1;
    }
  }

  .뀨 {
    opacity: 0.1;
    color: white;
    font-size: 11rem;
    position: absolute;
    bottom: 20%;
    left: 30%;
    transition-property: opacity;
    transition-duration: 1s;
  }

  .graphicComent {
    transform: rotate(-90deg);
    bottom: 35%;
    left: 40%;
  }

  .photoComent {
    left: 40%;
  }

  span.typing-effect {
    overflow: hidden;
    animation: typing 3s steps(80);
    white-space: nowrap;
    display: inline-block;
  }

  @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .plusComent {
      color: white;
      position: absolute;
      bottom: 20%;
      left: 40%;
      font-size: 25px;
      font-weight: 300;
      opacity: 0.5;
      transition-property: opacity;
      transition-duration: 1s;
      z-index: 1;
    }

    .galleryWrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      
    }
    .gallery {
      width: 300px;
      height: 400px;
      display: inline-block;
    }

    .roundUp {
      background-color: #111;
      width: 100%;
      height: 100px;
      border-radius: 100%;
      position: absolute;
      top: 20%;
    }
    .roundDown {
      background-color: #111;
      width: 100%;
      height: 100px;
      border-radius: 100%;
      position: absolute;
      bottom: 20%;
    }

    .intro1 {
      top: 10%;
      font-size: 3rem;
      left: 34%;
    }

    .intro2 {
      bottom: 10%;
      left: 40%;
      font-size: 3rem;
    }
  
`;

export default function Gisun () {
  // const targetImg = useRef<HTMLDivElement | null>(null);
  // const targetComent = useRef<HTMLDivElement | null>(null);

  const targetImgWeb = useRef<HTMLImageElement | null>(null);
  const targetComentWeb = useRef<HTMLParagraphElement | null>(null);
  const targetPlusWeb = useRef<HTMLSpanElement | null>(null);

  const targetImgApp = useRef<HTMLImageElement | null>(null);
  const targetComentApp = useRef<HTMLParagraphElement | null>(null);
  const targetPlusApp = useRef<HTMLSpanElement | null>(null);

  const targetImgPhoto = useRef<HTMLImageElement | null>(null);
  const targetComentPhoto = useRef<HTMLParagraphElement | null>(null);
  const targetPlusPhoto = useRef<HTMLSpanElement | null>(null);

  const targetImgGraphic = useRef<HTMLImageElement | null>(null);
  const targetComentGraphic = useRef<HTMLParagraphElement | null>(null);
  const targetPlusGraphic = useRef<HTMLSpanElement | null>(null);
  
  const targetImgDraw = useRef<HTMLImageElement | null>(null);
  const targetComentDraw = useRef<HTMLParagraphElement | null>(null);
  const targetPlusDraw = useRef<HTMLSpanElement | null>(null);
  
  const targetIntro1 = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px',
      threshold: 0,
    };

    const optionsPlus = {
      root: null,
      rootMargin: '-35% 0px',
      threshold: 0,
    };

    const optionsIntro = {
      root: null,
      threshold: 0,
    };

    const callback: any = (entries: any) => {
      entries.forEach((box: any) => {
        console.log(box.isIntersecting);
        if(box.target !== null) {
          if (box.isIntersecting) {
            box.target.style.opacity = '1';
          }else {
            box.target.style.opacity = '0';
          }
        }
      })
    };

    const callbackComent: any = (entries: any) => {
      entries.forEach((box: any) => {
        const target = box.target as HTMLElement;
        if (box.isIntersecting) {
          target.style.opacity = '1';
        }else {
          target.style.opacity = '0';
          target.style.transitionDuration = '0.5s';
        }
      })
    };

    const callbackPlus: any = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((box: any) => {
        const target = box.target as HTMLElement;
        if (target && box.target) {
          if (box.isIntersecting) {
            target.style.opacity = '1';
            target.classList.add('typing-effect');
          } else {
            target.style.opacity = '0';
            target.style.transitionDuration = '0.3s';
            target.classList.remove('typing-effect');
          }
        };
      })
    };

    const observerWeb = new IntersectionObserver(callback, options);
    const observerWebComent = new IntersectionObserver(callbackComent, options);
    const observerWebPlus = new IntersectionObserver(callbackPlus, optionsPlus);
    console.log(targetImgWeb); 
    if(targetImgWeb.current) {
      observerWeb.observe(targetImgWeb.current);
      
    }
    if(targetComentWeb.current) {
      observerWebComent.observe(targetComentWeb.current); 
    }
    if(targetPlusWeb.current) {
      observerWebPlus.observe(targetPlusWeb.current); 
    }
    
    const observerApp = new IntersectionObserver(callback, options); 
    const observerAppComent = new IntersectionObserver(callbackComent, options); 
    const observerAppPlus = new IntersectionObserver(callbackPlus, optionsPlus);
    if(targetImgApp.current) {
      observerApp.observe(targetImgApp.current); 
    }
    if(targetComentApp.current) {
      observerAppComent.observe(targetComentApp.current); 
    }
    if(targetPlusApp.current) {
      observerAppPlus.observe(targetPlusApp.current); 
    }

    const observerPhoto = new IntersectionObserver(callback, options); 
    const observerPhotoComent = new IntersectionObserver(callbackComent, options); 
    const observerPhotoPlus = new IntersectionObserver(callbackPlus, optionsPlus);
    if(targetImgPhoto.current) {
      observerPhoto.observe(targetImgPhoto.current); 
    }
    if(targetComentPhoto.current) {
      observerPhotoComent.observe(targetComentPhoto.current); 
    }
    if(targetPlusPhoto.current) {
      observerPhotoPlus.observe(targetPlusPhoto.current); 
    }

    const observerGraphic = new IntersectionObserver(callback, options);
    const observerGraphicComent = new IntersectionObserver(callbackComent, options);
    const observerGraphicPlus = new IntersectionObserver(callbackPlus, optionsPlus);
    if(targetImgGraphic.current) {
      observerGraphic.observe(targetImgGraphic.current); 
    }
    if(targetComentGraphic.current) {
      observerGraphicComent.observe(targetComentGraphic.current); 
    }
    if(targetPlusGraphic.current) {
      observerGraphicPlus.observe(targetPlusGraphic.current); 
    }

    const observerDraw = new IntersectionObserver(callback, options);
    const observerDrawComent = new IntersectionObserver(callbackComent, options);
    const observerDrawPlus = new IntersectionObserver(callbackPlus, optionsPlus);
    if(targetImgDraw.current) {
      observerDraw.observe(targetImgDraw.current); 
    }
    if(targetComentDraw.current) {
      observerDrawComent.observe(targetComentDraw.current); 
    }
    if(targetPlusDraw.current) {
      observerDrawPlus.observe(targetPlusDraw.current); 
    }

    const observerIntro1 = new IntersectionObserver(callbackComent, optionsIntro);
    if(targetIntro1.current) {
      observerIntro1.observe(targetIntro1.current); 
    }



  }, []);

  return (
    <GisunWrapper>
      <GisunContent></GisunContent>
      <GisunContent>
        
        <img className='이미지 webImage' ref={targetImgWeb} src={webImg} alt='webImg' />
        <p className='뀨' ref={targetComentWeb }>WEB</p>
        <span className='plusComent' ref={targetPlusWeb} >user-friendly</span>
      </GisunContent>
      <GisunContent></GisunContent>
      <GisunContent>
        <img className='이미지 appImage' ref={targetImgApp } src={appImg} alt='appImg' />
        <p className='뀨' ref={targetComentApp }>APP</p>
        <span className='plusComent' ref={targetPlusApp} >creative</span>
      </GisunContent>
      <GisunContent></GisunContent>
      <GisunContent>
        <img className='이미지 photoImage' ref={targetImgPhoto } src={photoImg} alt='photoImg' />
        <p className='뀨 photoComent' ref={targetComentPhoto }>PHOTO</p>
        <span className='plusComent' ref={targetPlusPhoto} >user-friendly</span>
      </GisunContent>
      <GisunContent></GisunContent>
      <GisunContent>
        <img className='이미지 graphinImg' ref={targetImgGraphic } src={graphinImg} alt='graphinImg' />
        <p className='뀨 graphicComent' ref={targetComentGraphic}>GRAPHIC</p>
        <span className='plusComent' ref={targetPlusGraphic} >creative</span>
      </GisunContent>
      <GisunContent></GisunContent>
      <GisunContent>
        <img className='이미지 drawImg' ref={targetImgDraw} src={drawImg} alt='drawImg' />
        <p className='뀨 ' ref={targetComentDraw}>DRAW</p>
        <span className='plusComent' ref={targetPlusDraw} >user-friendly</span>
      </GisunContent>
      <GisunContent></GisunContent>
      <GisunContent>
        <p className='뀨 intro1 ' ref={targetIntro1}>You can display your own</p>
        <div className='roundUp'></div>
        <div className='galleryWrapper'>
          <img className='gallery' src={webImg} alt='webImg' />
          <img className='gallery' src={appImg} alt='appImg' />
          <img className='gallery' src={photoImg} alt='photoImg' />
          <img className='gallery' src={graphinImg} alt='graphinImg' />
          <img className='gallery' src={drawImg} alt='drawImg' />
        </div>
        <div className='roundDown'></div>
        <p className='뀨 intro2 ' ref={targetIntro1}>in our Portfolly</p>
      </GisunContent>
      <GisunContent></GisunContent>

    </GisunWrapper>
  );
};

