import React from 'react'

export default function Movie(props) {
    return (
        <div>
            <p>
                {props.movieData.title}
            </p>
            <img src={'https://image.tmdb.org/t/p/w500'+props.movieData.backdrop_path} alt={props.movieData.title}/>
        </div>
    )
}
