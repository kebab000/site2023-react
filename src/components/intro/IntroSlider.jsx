import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow'
import 'swiper/css/bundle'
SwiperCore.use([Navigation, Pagination, Autoplay]);
const intros = [
    {
        src :"introSlider00.jpeg",
        title :"프로필 사진"
    },
    {
        src :"introSlider01.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider02.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider03.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider04.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider05.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider06.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider07.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider08.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider09.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider10.jpg",
        title :"프로필 사진"
    },
    {
        src :"introSlider11.jpg",
        title :"프로필 사진"
    },
    
]

const IntroImg = ({ image }) => {
    return(
        <img src={`../assets/images/introPage/${image.src}`} alt="프로필 사진" />
    )
  }
const IntroSlider = () => {
  return (
    <div className='intro__slider'>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slidesPerView={8}
            loop={true}
            spaceBetween={10}
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            pagination={false}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            >
            {intros.map((image, index) => (
                <SwiperSlide key={index}>
                <IntroImg image={image} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default IntroSlider
