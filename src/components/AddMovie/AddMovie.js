import React from 'react'

export default function AddMovie() {
    function toggleAddMovie (e){
        e.preventDefault()
        const element=document.getElementById('upload_movie')
        element.classList.toggle('hidden')
        console.log('asd')
    }
    return (
        <div onClick={toggleAddMovie}>
            Addmovie
        </div>
    )
}
