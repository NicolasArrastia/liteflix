import React from 'react'

// Styles
import './mainMovie.css'

export default function MainMovie(props) {
    const movieTitle = props.movieTitle;
    return (
        <div className="main-movie">
            <div className="main-movie__original">
                Original de <span>liteflix</span>
            </div>
            <div className="main-movie__movie-name">{movieTitle}</div>
        </div>
    )
}
