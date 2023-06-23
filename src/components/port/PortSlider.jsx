import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/bundle';
SwiperCore.use([Navigation, Pagination, Autoplay]);
const ports = [
    {
        name: '이요셉',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port00.png',
        url: 'https://kebab-portfolio.web.app/',
        profileImg: 'member106.svg',
    },
    {
        name: '진현미',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port01.png',
        url: '#',
        profileImg: 'member80.svg',
    },
    {
        name: '장진용',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port02.png',
        url: 'https://portfolio-cc509.web.app/',
        profileImg: 'member02.svg',
    },
    {
        name: '김도현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port03.png',
        url: '#',
        profileImg: 'member03.svg',
    },
    {
        name: '이양구',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port04.png',
        url: '#',
        profileImg: 'member04.svg',
    },
    {
        name: '천설희',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port05.png',
        url: '#',
        profileImg: 'member05.svg',
    },
    {
        name: '이승연',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port06.png',
        url: '#',
        profileImg: 'member06.svg',
    },
    {
        name: '김현빈',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port07.png',
        url: 'https://portfolio-hyenobeen.netlify.app/',
        profileImg: 'member07.svg',
    },
    {
        name: '정황우',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port08.png',
        url: '#',
        profileImg: 'member08.svg',
    },
    {
        name: '여다슬',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port09.png',
        url: '#',
        profileImg: 'member09.svg',
    },
    {
        name: '이은지',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port10.png',
        url: '#',
        profileImg: 'member10.svg',
    },
    {
        name: '노지영',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port11.png',
        url: 'https://noji-portfolio.netlify.app/',
        profileImg: 'member11.svg',
    },
    {
        name: '이훈규',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port12.png',
        url: '#',
        profileImg: 'member12.svg',
    },
    {
        name: '신동진',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port13.png',
        url: '#',
        profileImg: 'member13.svg',
    },
    {
        name: '김도현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port15.png',
        url: '#',
        profileImg: 'member15.svg',
    },
    {
        name: '변우현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port16.png',
        url: '#',
        profileImg: 'member16.svg',
    },
    {
        name: '안교남',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port17.png',
        url: '#',
        profileImg: 'member17.svg',
    },
    {
        name: '전윤기',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port18.png',
        url: 'https://myportpolio-e7f37.web.app',
        profileImg: 'member18.svg',
    },
    {
        name: '권현정',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port19.png',
        url: '#',
        profileImg: 'member19.svg',
    },
    {
        name: '정희석',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port20.png',
        url: '#',
        profileImg: 'member20.svg',
    },
    {
        name: '이유나',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port21.png',
        url: '#',
        profileImg: 'member21.svg',
    },
];
const PortImg = ({ port }) => {
    return (
        <a href={port.url}>
            <img
                src={`./assets/images/port/${port.portImg}`}
                alt={`${port.name}포트폴리오`}
            />
            <h4>{port.name}</h4>
        </a>
    );
};
const PortSlider = () => {
    return (
        <div className="port__slider nexon5">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={4}
                loop={true}
                spaceBetween={10}
                speed={6000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Navigation, Pagination]}
            >
                {ports.map((port, index) => (
                    <SwiperSlide key={index}>
                        <PortImg port={port} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PortSlider;
