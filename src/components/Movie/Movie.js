import React from 'react'

// Components
import PlayButton from '../PlayButton/PlayButton';

// Styles
import './movie.css'

export default function Movie(props) {
    const movie = props.movieData;
    let movieImage = '';
    let releaseDate=''; 
    if (props.isLocal){
        movieImage=movie.image;
    }else{
        releaseDate=movie.release_date.slice(0,4);
        movieImage='https://image.tmdb.org/t/p/w500'+movie.backdrop_path
    }

    return (
        <div className="movie-container">
            <PlayButton></PlayButton>
            <p className="movie-container__title">
                {movie.title}
            </p>
            <img className="movie-container__image" src={movieImage} alt={movie.title}/>
            <div className="movie-container__details">
                {
                    (props.isLocal)?
                    null
                    :
                    <span className="movie-container__vote-average">
                        <img src="./img/star.svg" alt="star_icon"/>
                        {movie.vote_average}
                    </span>
                }
                <span className="movie-container__release-date">
                    {releaseDate}
                </span>

            </div>
        </div>
    )
}
