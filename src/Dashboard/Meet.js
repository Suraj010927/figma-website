import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Meet.css';
import { menImages } from './mentor-svg';


export default function App() {
  return (
    <div className="custom-meet-box d-flex flex-column my-auto">
      <Swiper
      navigation={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="custom-swiper-container"
        modules={[Navigation]} >
        <SwiperSlide className="custom-swiper-slide">
          <img src={menImages.image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="custom-swiper-slide">
          <img src={menImages.image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="custom-swiper-slide">
          <img src={menImages.image3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      <span className='metext text-center'>Meet similar mentors</span>
    </div>
  );
}
