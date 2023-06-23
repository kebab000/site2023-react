import React from 'react';
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
        profileImg: 'member107.svg',
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
const PortItem = port => {
    return (
        <div className="port">
            <figure className="port__header">
                <a href={port.port.url} target="_blank" rel="noreferrer">
                    <img
                        src={`./assets/images/port/${port.port.portImg}`}
                        alt={`${port.port.name}포트폴리오`}
                    />
                </a>
            </figure>
            <div className="port__body">
                <span>
                    <img
                        src={`./assets/images/member/${port.port.profileImg}`}
                        alt={port.port.name}
                    />
                </span>
                <div>
                    <h4>{port.port.name}</h4>
                    <p>{port.port.desc}</p>
                </div>
            </div>
        </div>
    );
};

const PortCont = () => {
    return (
        <section id="portCont" className="ports__item section center bg-blue">
            <h3>포트폴리오 소개</h3>
            <p>웹쓰 30기 포트폴리오 모음집입니다.</p>
            <div className="port__inner container">
                <div className="port__btn"></div>
                <div className="port__cont">
                    {ports.map((port, index) => (
                        <PortItem key={index} port={port} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortCont;
