import React, {useEffect} from 'react'

// Styles
import './movie.css'

export default function Movie(props) {
    const movie = props.movieData;
    let movieImage = '';
    if (props.isLocal){
        movieImage=movie.image
    }else{
        movieImage='https://image.tmdb.org/t/p/w500'+movie.backdrop_path
    }

    return (
        <div className="movie-container">
            <p className="movie-container__title">
                {movie.title}
            </p>
            <img className="movie-container__image" src={movieImage} alt={movie.title}/>
        </div>
    )
}
