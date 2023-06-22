import React from 'react'
import { Link } from 'react-router-dom';

const UnsplashTag = ({onSearch}) => {
    const onClick = (value)=>{
      onSearch(value);
      // console.log(value)
    }
  return (
    <div className="unsplash__tag">
        <ul>
            <li><Link onClick={() => onClick("nature")}>자연 사진</Link></li>
            <li><Link onClick={() => onClick("city")}>도시 사진</Link></li>
            <li><Link onClick={() => onClick("food")}>음식 사진</Link></li>
            <li><Link onClick={() => onClick("sky")}>하늘 사진</Link></li>
            <li><Link onClick={() => onClick("daily")}>일상 사진</Link></li>
        </ul>
    </div>
  )
}

export default UnsplashTag