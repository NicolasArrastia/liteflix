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
            Addmovie
        </div>
    )
}
