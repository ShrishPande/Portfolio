import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import kws from '../../assets/kws.png'
import portfolio from '../../assets/portfolio.png'
import 'swiper/css'

const Porfolio = () => {
    const kwsRef=useRef();
    const portfolioRef=useRef();

    const [widthSmall,setWidthSmall]=useState();

  const [windowWidth,setWindowWidth]=useState();
  
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 650|| window.innerWidth<650) {
      setWidthSmall(true);
    } else {
      setWidthSmall(false);
    }
  }, [windowWidth]);

  return (
    <div className='portfolio' id="Portfolio">
      <div className='title'>
        <h2>My Projects</h2>
      </div>
        <Swiper
        spaceBetween={30}
        slidesPerView={widthSmall ? 1:3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide onClick={()=>kwsRef.current.click()}>
                <img src={kws} alt=""/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>portfolioRef.current.click()}>
                <img src={portfolio} alt="" />
            </SwiperSlide>
        </Swiper>

                <a href="http://kwsmedia.netlify.app" ref={kwsRef} target="new"></a>
                <a href="http://shrishpandey08.netlify.app" ref={portfolioRef} target="new"></a>
    </div>
  );
};

export default Porfolio;
