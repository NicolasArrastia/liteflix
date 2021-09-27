import React from 'react'

// Components
import '../Button/Button'
import Button from '../Button/Button';

// Styles
import './mainMovie.css'

export default function MainMovie(props) {
    const movieTitle = props.movieTitle;
    return (
        <div className="main-movie">
            <div className="main-movie__original">
                Original de <span>liteflix</span>
            </div>
            <div className="main-movie__title">{movieTitle}</div>
            <Button buttonStyle={0} text="Reproducir"></Button>
            <Button buttonStyle={1} text="Mi lista"></Button>
        </div>
    )
}
