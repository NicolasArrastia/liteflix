import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function PopUp() {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: '.jpeg,.png'
        });



    // const {getRootProps, getInputProps} = useDropzone({onDrop})

    const [image,setImage]=useState('');
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onerror = () => {
            console.error('hubo un error al cargar el archivo')
            alert('hubo un error')
        }
        reader.onload = () => {
        // Do whatever you want with the file contents
            const binaryStr = reader.result
            setImage(binaryStr)
        }
        reader.readAsDataURL(file)
        })
    }, [])

    function sendMovie(){
        const movieTitle = document.getElementById('movie_title').value;
        let movieList;
        let data = localStorage.getItem('movies');

        if( image === '' || movieTitle===''){
            console.log('ingrese archvo y título')
        }
        else{
            let movie = {
                'name':movieTitle,
                'image':image
            }
            data===null?movieList=[]:movieList=JSON.parse(data);
            movieList.push(movie);
            localStorage.setItem('movies',JSON.stringify(movieList))

            console.log('enviado')
        }
    }

    return (
        <fieldset>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <input id="movie_title" type="text" placeholder="título"></input>
            <div onClick={sendMovie}>enviar</div>
        </fieldset>
    )
}