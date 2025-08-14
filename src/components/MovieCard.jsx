import React from 'react'
import '../css/MovieCard.css'

function MovieCard({movie}) {

    function onFavoriteclick(){

    }
  return (
    <div className='movie-card '>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-overlay'>

                <button className='favorite-btn' onClick={onFavoriteclick}> <i className="fa-solid fa-heart"></i></button>
                 
            </div>

        </div>
        <div className='movie-info'>

            <h3>{movie.title}</h3>
            <p>{movie.relese_date}</p>

        </div>
    </div>
  )
}

export default MovieCard