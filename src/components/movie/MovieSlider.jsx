import { Link } from 'react-router-dom';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/effect-coverflow'
import 'swiper/css/bundle'
SwiperCore.use([Navigation, Pagination, Autoplay]);

const MovieImg = ({ movie }) => {
  return(
    <Link to={`https://www.themoviedb.org/movie/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />
    </Link>
  )
}

const MovieSlider = ({ movies }) => {
  return (
    <div className='movie__slider'>
      <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"2"}
          root = {true}
          spaceBetween={"3"}
          autoplay={{
              delay: 5000,
              disableOnInteraction: false,                
          }}
          pagination={false}
          navigation={true}
          modules={[Autoplay,Navigation,Pagination]}
          
          >
          {movies.map((movie,index) => (
            <SwiperSlide>
              <MovieImg key={index} movie={movie}/>  
            </SwiperSlide>
          ))}
      </Swiper>
</div>
  )
}

export default MovieSlider