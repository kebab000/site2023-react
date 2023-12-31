import React from 'react';

const Portfolio = props => {
    return (
        <section id="portSection" className={props.attr}>
            <h3>포트폴리오 소개</h3>
            <p>웹쓰 30기 포트폴리오 모음집입니다.</p>
            <div className="port__inner container">
                <div className="port__btn"></div>
                <div className="port__cont">
                    <div className="port">
                        <figure className="port__header">
                            <a href="/">
                                <img
                                    src="./assets/images/port/port01-min.png"
                                    alt="포트폴리오"
                                />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/member80.svg"
                                    alt="김땡땡"
                                />
                            </span>
                            <div>
                                <h4>진현미 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img
                                src="./assets/images/port/port03-min.png"
                                alt="포트폴리오"
                            />
                        </figure>
                        <div className="port__body">
                            <span>
                                <a href="https://kdh-portfolio.netlify.app">
                                    <img
                                        src="./assets/images/member/member03.svg"
                                        alt="김도현"
                                    />
                                </a>
                            </span>
                            <div>
                                <h4>김도현 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="https://leeyanggoo-portfolio.web.app/">
                                <img
                                    src="./assets/images/port/port04-min.png"
                                    alt="포트폴리오"
                                />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/member04.svg"
                                    alt="이양구"
                                />
                            </span>
                            <div>
                                <h4>이양구 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="https://portfolio-313.web.app/">
                                <img
                                    src="./assets/images/port/port05-min.png"
                                    alt="포트폴리오"
                                />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/member05.svg"
                                    alt="천설희"
                                />
                            </span>
                            <div>
                                <h4>천설희 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="https://dkdlelw-portfolio.web.app/">
                                <img
                                    src="./assets/images/port/port06-min.png"
                                    alt="포트폴리오"
                                />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/member06.svg"
                                    alt="이승연"
                                />
                            </span>
                            <div>
                                <h4>이승연 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <a href="https://portfolio-hyenobeen.netlify.app/">
                                <img
                                    src="./assets/images/port/port07-min.png"
                                    alt="포트폴리오"
                                />
                            </a>
                        </figure>
                        <div className="port__body">
                            <span>
                                <img
                                    src="./assets/images/member/member07.svg"
                                    alt="김현빈"
                                />
                            </span>
                            <div>
                                <h4>김현빈 포트폴리오</h4>
                                <p>프론트앤드 개발자 포트폴리오</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
