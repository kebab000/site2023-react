import React from 'react'
import Contents from '../layout/Contents'
import ContTitle from '../layout/ContTitle'
import PortSlider from '../port/PortSlider'
import PortCont from '../port/PortCont'

const PortPage = () => {
  return (
    <Contents>
      <ContTitle title='Portfolio'/>
      <PortSlider/>
      <PortCont/>
    </Contents>
  )
}

export default PortPage