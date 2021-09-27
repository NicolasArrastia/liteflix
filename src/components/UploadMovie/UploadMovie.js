import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

// Styles
import './uploadMovie.css'

export default function MyDropzone() {
    const [image,setImage]=useState('');
    const [fileName,setFileName]=useState('');
    
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                /* convierto a base 64 para guardar en localStorage */
                const base64Image = reader.result
                setImage(base64Image)
                console.log(base64Image)
                setFileName(file.name)
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const sendMovie = ()=>{
        const movieTitle = document.getElementById('movie_title').value;
        let movieList;
        let data = localStorage.getItem('movies');
        // console.log(files)
        if( image === '' || movieTitle===''){
            alert('debe ingresar título e imagen')
        }
        else{
            let movie = {
                'title':movieTitle,
                'image':image
            }
            data===null?movieList=[]:movieList=JSON.parse(data);
            movieList.push(movie);
            localStorage.setItem('movies',JSON.stringify(movieList))

            console.log('enviado')
        }
    }

    function closeWindow (e){
        e.preventDefault()
        const element=document.getElementById('upload_movie')
        element.classList.toggle('upload-movie--active')
    }
    
    return (
        <div id="upload_movie" className="upload-movie">
            <div className="upload-movie__window">
                <div className="plus-icon" onClick={closeWindow}></div>
                <p className="upload-movie__title">Agregar película</p>
                <div className="upload-movie__dropzone" {...getRootProps()}>
                    <input {...getInputProps()} />
                    <img src="./img/clip.svg" alt="clip"/>
                    <p><span style={{fontWeight:'700'}}>Agrega un archivo</span> o arrastralo y soltalo aquí</p>
                    {/* <span>{fileName}</span> */}
                </div>
                {}
                <input id="movie_title" type="text" placeholder="título"></input>
                <div className="upload-movie__send" onClick={sendMovie}>Subir película</div>
            </div>
        </div>
    )
}