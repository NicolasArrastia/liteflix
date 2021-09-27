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
            console.log('ingrese archvo y título')
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
    
    return (
        <div id="upload_movie" className="upload-movie">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <span>{fileName}</span>
            </div>
            {}
            <input id="movie_title" type="text" placeholder="título"></input>
            <div onClick={sendMovie}>enviar</div>
        </div>
    )
}