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

const Youtube = ({youtube}) => {
  return(
    
    <Link to = {`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
      <img src={youtube.snippet.thumbnails.medium.url} alt={youtube.snippet.title} />
    </Link>
  )
}

const YoutubeSlider = ({ youtubes }) => {
  return (
        <div className='youtube__slider'>
          <Swiper
             effect={"coverflow"}
             grabCursor={true}
             slidesPerView={"3"}
             root = {true}
             spaceBetween={3}
             autoplay={{
                 delay: 5000,
                 disableOnInteraction: false,                
             }}
             pagination={false}
             navigation={true}
             modules={[Autoplay,Navigation,Pagination]}
              
              >
              {youtubes.map((youtube,index) => (
                <SwiperSlide>
                  <Youtube key={index} youtube={youtube}/>  
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
  )
}

export default YoutubeSlider

