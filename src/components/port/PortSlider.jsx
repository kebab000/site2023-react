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
        url: 'https://portfolio-hyunmi.netlify.app/',
        profileImg: 'member80.svg',
    },
    {
        name: '천설희',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port05.png',
        url: 'https://portfolio-313.web.app/',
        profileImg: 'member05.svg',
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
        url: 'https://kdh-portfolio.netlify.app',
        profileImg: 'member03.svg',
    },
    {
        name: '이양구',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port04.png',
        url: 'https://leeyanggoo-portfolio.web.app/',
        profileImg: 'member04.svg',
    },
    {
        name: '이승연',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port06.png',
        url: 'https://dkdlelw-portfolio.web.app/',
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
        url: 'https://jhwportfolio.netlify.app/',
        profileImg: 'member08.svg',
    },
    {
        name: '여다슬',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port09.png',
        url: 'https://yds-portfo.web.app/',
        profileImg: 'member09.svg',
    },
    {
        name: '이은지',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port10.png',
        url: 'https://my-portfolio-vite.web.app/',
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
        url: 'https://hoongportfolio.netlify.app/',
        profileImg: 'member12.svg',
    },
    {
        name: '신동진',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port13.png',
        url: 'https://sdj-portfolio-5a461.web.app/',
        profileImg: 'member13.svg',
    },
    {
        name: '김도현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port15.png',
        url: 'https://portfolio-45429.web.app/',
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
        url: 'https://portfolio-18b72.web.app/',
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
        url: 'https://getgrovy-port.web.app/',
        profileImg: 'member20.svg',
    },
    {
        name: '이유나',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port21.png',
        url: 'https://yuna-portfolio.web.app/',
        profileImg: 'member21.svg',
    },
];
const PortImg = ({ port }) => {
    return (
        <a href={port.url} target="_blank" rel="noreferrer">
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
                slidesPerView={3.5}
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
