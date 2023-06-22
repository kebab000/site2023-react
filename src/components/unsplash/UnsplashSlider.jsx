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

const MovieImg = ({image}) => {
  return(
    
      <Link href={`https://unsplash.com/photos/${image.id}`}>
             <img src={image.urls.regular} alt={image.alt_description} />
      </Link>
  )
}

const UnsplashSlider = ({ images }) => 
{

  return (
    <div className='unsplash__slider'>
      <Swiper
         effect={"coverflow"}
         grabCursor={true}
         slidesPerView={"4"}
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
          {images.map((image,index) => (
            <SwiperSlide>
              <MovieImg key={index} image={image}/>  
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default UnsplashSlider