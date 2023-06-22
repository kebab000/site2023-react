import React from 'react'
import { Link } from 'react-router-dom';

const Member = (props) => {
  return (
    <section id="memberSection" className={props.attr}>
            <h3>멤버소개</h3>
            <p>함께 공부한 웹쓰 30기 멤버들 입니다.</p>
            <div className="member__inner container">
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member80.svg" alt="땡땡님"/>
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰30기</h4>
                        <p className="desc">진현미</p>
                        <Link to="/" className="btn"></Link>
                    </div> 
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member02.svg" alt="땡땡님"/>
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰30기</h4>
                        <p className="desc">김도현</p>
                        <Link to="/" className="btn"></Link>
                    </div> 
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/member03.svg" alt="땡땡님"/>
                    </figure>
                    <div className="member__body">
                        <h4 className="title">웹쓰30기</h4>
                        <p className="desc">이양구</p>
                        <Link to="/" className="btn"></Link>
                    </div> 
                </div>
            </div>
        </section>    
  )
}

export default Member