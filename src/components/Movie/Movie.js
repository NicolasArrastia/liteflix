import React from 'react'

export default function Movie(props) {
    const movie = props.movieData;
    let movieImage = '';
    if (props.isLocal){
        movieImage=movie.image
    }else{
        movieImage='https://image.tmdb.org/t/p/w500'+movie.backdrop_path
    }

    return (
        <div>
            <p>
                {movie.title}
            </p>
            <img src={movieImage} alt={movie.title}/>
        </div>
    )
}
