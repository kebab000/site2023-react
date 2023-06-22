import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
  return (
    <section id="movieSection" className={props.attr}>
      <div className="movie__inner container">
          <div className="movie__text">
              <h3>개발자 추천 영화</h3>
              <p>개발에 관련된 영화 목록입니다.<br/> 영화를 보고 개발자에 대해 알아봅시다!</p>
              <Link to="/" className="button-green">자세히 보기</Link>
          </div>
          <div className="movie__item">
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie01.png" alt="movie"/></Link>
              </div>
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie02.png" alt="movie"/></Link>
              </div>
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie03.png" alt="movie"/></Link>
              </div>
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie04.png" alt="movie"/></Link>
              </div>
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie01.png" alt="movie"/></Link>
              </div>
              <div>
                  <Link to="/"><img src="./assets/images/movie/movie02.png" alt="movie"/></Link>
              </div>
          </div>
      </div>
  </section>    
  )
}

export default Movie