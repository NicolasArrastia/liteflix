import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

// Components
import Loading from '../Loading/Loading';
import Liteflix from '../Liteflix/Liteflix'
import Profile from '../Profile/Profile'

// Styles
import './uploadMovie.css'

export default function MyDropzone() {
    const [image,setImage]=useState('');
    const [loadingBar,setLoading]=useState(0);
    const [isError,setIsError]=useState(0);
    
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setLoading(0)
            setLoading(1);
            const loadingElement = document.getElementById('progress_bar');
            const reader = new FileReader()
            reader.onabort = () => {
                setIsError(1)
                loadingElement.style.animation="errorAnimation 2s ease 0s 1"
                console.log('file reading was aborted')
            }
            reader.onerror = () => {
                setIsError(1)
                loadingElement.style.animation="errorAnimation 2s ease 0s 1"
                console.log('file reading has failed')
                
            }
            reader.onload = () => {
                // loading animation to give feedback to the user
                loadingElement.style.animation="loadingAnimation 2s ease 0s 1";

                /* covert image to base 64 so we can save it on localStorage */
                const base64Image = reader.result
                setImage(base64Image)
                console.log(base64Image)
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    const sendMovie = ()=>{
        const movieTitle = document.getElementById('movie_title').value;
        let movieList;
        let data = localStorage.getItem('movies');

        if (isError){
            alert('hubo un error en la carga del archivo')
        }else{
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
                alert('pelicula subida con éxito')
            }
        }
    }

    function closeWindow (e){
        e.preventDefault()
        const element=document.getElementById('upload_movie')
        element.classList.toggle('upload-movie--active')

        setLoading(0)
        // const loadBar = document.getElementById('loading-container')
        // loadBar.classList.toggle('hidden')
    }
    
    return (
        <div id="upload_movie" className="upload-movie">
            <div className="upload-movie__window">
                <header>
                    <Liteflix></Liteflix>
                    <Profile></Profile>
                </header>
                <div className="plus-icon" onClick={closeWindow}></div>
                <p className="upload-movie__title">Agregar película</p>
                <div id="dropzone" className={"upload-movie__dropzone "+(loadingBar?"loading":null)} {...getRootProps()}>
                    {
                        (loadingBar)?<Loading isError={isError}></Loading>:null
                    }
                    <input {...getInputProps()} />
                    <img src="./img/clip.svg" alt="clip"/>
                    <p><span style={{fontWeight:'700'}}>Agrega un archivo</span> o arrastralo y soltalo aquí</p>
                </div>
                {}
                <input id="movie_title" type="text" placeholder="título"></input>
                <div className="upload-movie__send" onClick={sendMovie}>Subir película</div>
                <div className="upload-movie__exit" onClick={closeWindow}>Salir</div>
            </div>
        </div>
    )
}