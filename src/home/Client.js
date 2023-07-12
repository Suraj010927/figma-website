import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import './Client.css';
import data from './Client/data';

export default function Client() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        breakpoints = {{
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  
  }}

        modules={[Pagination, Navigation]}
        className="mySwiper py-5"
      >
        {data.map((client, index) => (
          <SwiperSlide key={index} className='mx-auto'>
            <div className="slide-wrapper">
              <div className="bubble">
                <p className="te">{client.text}</p>
                <div className="triangle"></div>
              </div>
              <div className='client-info d-flex justify-content-end'>
                <div className='d-flex flex-column justify-content-end'>
                  <span className="n align-self-end">{client.name} </span>
                  <span className="t">{client.title}</span>
                </div>
                <img src={client.profilePic} alt="Profile" className="profile-pic" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
