import React from 'react'
import MovieItem from './MovieItem'



const MovieCont = ({movies}) => {
  return (
    <div className='movie__cont container'>
    <ul>
      {movies.map((movie) =>
         <MovieItem key={movie.id} movie={movie} />
         )}
    </ul>
  </div>

  )
}

export default MovieCont