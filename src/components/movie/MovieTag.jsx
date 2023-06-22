import React from 'react'
import { Link } from 'react-router-dom';

const MovieTag = ({onSearch}) => {
  const onClick = (value)=>{
    onSearch(value);
    // console.log(value)
  }
  return (
    <div className="movie__tag">
        <ul>
            <li><Link onClick={() => onClick("romance")} >로맨스 영화</Link></li>
            <li><Link onClick={() => onClick("comedy")}>코미디 영화</Link></li>
            <li><Link onClick={() => onClick("action")}>액션 영화</Link></li>
            <li><Link onClick={() => onClick("classic")}>고전 영화</Link></li>
            <li><Link onClick={() => onClick("horror")}>공포 영화</Link></li>
        </ul>
    </div>
  )
}

export default MovieTag