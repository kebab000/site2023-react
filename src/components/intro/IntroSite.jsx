import React from 'react';

const items = [
    {
        url: 'https://kebab000.github.io/web2023/',
        src: 'introitem00-min.png',
        title: 'webs2023 메인페이지',
    },
    {
        url: 'https://kebab000.github.io/web2023/class/index.html',
        src: 'introitem01-min.png',
        title: '클라스 페이지',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/index.html',
        src: 'introitem02-min.png',
        title: '자바스크립트 정리 메인페이지',
    },
    {
        url: 'https://kebab000.github.io/web2023/w-webd/index.html',
        src: 'introitem03-min.png',
        title: '레이아웃 모형 페이지',
    },
    {
        url: 'https://kebab000.github.io/web2023/site/index.html',
        src: 'introitem04-min.png',
        title: '사이트 만들기',
    },
    {
        url: 'https://kebab000.github.io/web2023/site/site1/index.html',
        src: 'introitem05-min.png',
        title: '사이트 완성01',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/parallax/parallaxEffectAA.html',
        src: 'introitem06-min.png',
        title: '페럴랙스 이펙트',
    },
    {
        url: 'http://kebab00.dothome.co.kr/php/index.html',
        src: 'introitem07-min.png',
        title: 'PHP블로그',
    },
    {
        url: 'http://kebab00.dothome.co.kr/php2/index.html',
        src: 'introitem08-min.png',
        title: 'PHP팀프로젝트',
    },
    {
        url: 'https://kebab000.github.io/web2023/mysql/index.html',
        src: 'introitem09-min.png',
        title: 'MYSQL 설명',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/quiz/quizEffect01.html',
        src: 'introitem10-min.png',
        title: '퀴즈 이펙트01',
    },
    {
        url: 'https://kebab-sgame.web.app/',
        src: 'introitem11-min.png',
        title: '게임이펙트',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/mouse/mouseEffect01.html',
        src: 'introitem12-min.png',
        title: '마우스 이펙트01',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/search/searchEffect01.html',
        src: 'introitem13-min.png',
        title: '검색 이펙트01',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/parallax/parallaxEffect01.html',
        src: 'introitem14-min.png',
        title: '패럴랙스 이펙트01',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/slider/sliderEffect01.html',
        src: 'introitem15-min.png',
        title: '슬라이드 이펙트01',
    },
    {
        url: 'https://kebab000.github.io/web2023/javascript/portfolio/ex1/index.html',
        src: 'introitem16-min.png',
        title: '포트폴리오 이펙트01',
    },
];

const IntroItem = item => {
    return (
        <li>
            <a href={item.item.url} target="_blank" rel="noreferrer">
                <img
                    src={`../assets/images/introPage/${item.item.src}`}
                    alt={item.item.title}
                />
                <span>{item.item.title}</span>
            </a>
        </li>
    );
};

const IntroSite = () => {
    return (
        <div className="intro__items bg-blue nexon5">
            <h2>내가 만든 사이트 모음</h2>
            <ul>
                {items.map((item, index) => (
                    <IntroItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default IntroSite;
