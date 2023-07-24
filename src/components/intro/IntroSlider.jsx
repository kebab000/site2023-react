import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/bundle';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const intros = [
    {
        src: 'introSlider00-min.jpeg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider01-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider02-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider03-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider04-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider05-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider06-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider07-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider08-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider09-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider10-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider11-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider00-min.jpeg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider01-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider02-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider03-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider04-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider05-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider06-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider07-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider08-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider09-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider10-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider11-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider00-min.jpeg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider01-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider02-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider03-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider04-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider05-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider06-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider07-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider08-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider09-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider10-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider11-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider00-min.jpeg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider01-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider02-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider03-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider04-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider05-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider06-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider07-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider08-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider09-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider10-min.jpg',
        title: '프로필 사진',
    },
    {
        src: 'introSlider11-min.jpg',
        title: '프로필 사진',
    },
];

const IntroImg = ({ image }) => {
    return (
        <img
            src={`../assets/images/introPage/${image.src}`}
            alt="프로필 사진"
        />
    );
};
const IntroSlider = () => {
    return (
        <div className="intro__slider nexon5">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={8}
                loop={true}
                spaceBetween={3}
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
    );
};

export default IntroSlider;
