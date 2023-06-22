import React from 'react'
import Contents from '../layout/Contents'
import Slider from '../section/Slider'
import Intro from '../section/Intro'
import Portfolio from '../section/Portfolio'
import Youtube from '../section/Youtube'
import Unsplash from '../section/Unsplash'
import Movie from '../section/Movie'

const Home = () => {
  return (
    <>
      <Contents>
        <Slider attr={"slider__wrap nexon5"}/>
        <Intro attr={"intro__wrap section bg-blue nexon5"}/>
        <Portfolio attr={"ports__wrap section center "}/>
        <Youtube attr={'youtube__wrap section nexon5 bg-blue'}/>
        <Unsplash attr={"unsplash__wrap section nexon5"}/>
        <Movie attr={"movie__wrap section nexon5 bg-blue"}/>
      </Contents> 
    </>
  )
}

export default Home