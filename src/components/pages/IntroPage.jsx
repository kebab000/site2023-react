import React from 'react'
import Contents from '../layout/Contents'
import ContTitle from '../layout/ContTitle'
import IntroCont from '../intro/IntroCont'
import IntroSlider from '../intro/IntroSlider'
import IntroSite from '../intro/IntroSite'
// import IntroSearch from '../intro/IntroSearch'

const IntroPage = () => {
  return (
    <Contents>
      <ContTitle title='Intro'/>
      <IntroSlider />
      <IntroCont />
      {/* <IntroSearch /> */}
      <IntroSite />
    </Contents>
  )
}

export default IntroPage