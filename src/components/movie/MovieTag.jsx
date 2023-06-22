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
            <li><Link onClick={() => onClick("https://api.themoviedb.org/3/movie/popular")} >인기 영화</Link></li>
            <li><Link onClick={() => onClick("https://api.themoviedb.org/3/movie/now_playing")}>현재 상영작</Link></li>
            <li><Link onClick={() => onClick("https://api.themoviedb.org/3/tv/popular")}>인기티비쇼</Link></li>
            <li><Link onClick={() => onClick("https://api.themoviedb.org/3/tv/top_rated")}>티비쇼 순위</Link></li>
        </ul>
    </div>
  )
}

export default MovieTag