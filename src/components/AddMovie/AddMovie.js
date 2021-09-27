import React from 'react'

// Styles
import './addMovie.css'

export default function AddMovie() {
    function toggleAddMovie (e){
        e.preventDefault()
        const element=document.getElementById('upload_movie')
        element.classList.toggle('hidden')
        // console.log(element)
    }
    return (
        <div onClick={toggleAddMovie} className="add-movie">
            <div className="add-movie__icon">
                <div></div>
                <div></div>
            </div>
            <span className="add-movie__text">
                agregar película
            </span>
        </div>
    )
}
