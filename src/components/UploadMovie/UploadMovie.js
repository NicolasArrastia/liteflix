import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone() {
    const [image,setImage]=useState('');
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
                const base64Image = reader.result
                setImage(base64Image)
                console.log(base64Image)
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    )
}
// import React, {useCallback,useState} from 'react';
// import {useDropzone} from 'react-dropzone';

// // Styles
// import '../../App.css'


// export default function Basic(props) {
//     const [image,setImage]=useState('');
//     const {
//         acceptedFiles,
//         getRootProps,
//         getInputProps
//     } = useDropzone({
//         onDrop,
//             accept: '.jpeg,.png,.jpg'
//     });

//     const onDrop = useCallback((acceptedFiles) => {
//         acceptedFiles.forEach((file) => {
//         const reader = new FileReader()
//         console.log('imagen')

//         reader.onerror = () => {
//             console.error('hubo un error al cargar el archivo')
//             alert('hubo un error')
//         }
//         reader.onload = () => {
//             const binaryStr = reader.result
//             console.log(binaryStr)
//             setImage(binaryStr)
//         }
//         reader.readAsDataURL(file)
//         })
//     }, [])

//     const files = acceptedFiles.map(file => (
//         <li key={file.path}>
//             {file.path} - {file.size} bytes
//         </li>
//     )); 

//     return (
//         <div id="upload_movie">
//             <fieldset>
//                 <div {...getRootProps()}>
//                     <input {...getInputProps()} />
//                     <p>Drag 'n' drop some files here, or click to select files</p>
//                 </div>
//                 {files}
//                 <input id="movie_title" type="text" placeholder="título"></input>
//                 <div>enviar</div>
//             </fieldset>
//         </div>
//     );
// }


// // import React, {useCallback,useState} from 'react'
// // import {useDropzone} from 'react-dropzone'

// // // Styles
// // import '../../App.css'

// // export default function PopUp() {
// //     const {
// //         getRootProps,
// //         getInputProps,
// //         isDragActive,
// //         isDragAccept,
// //         isDragReject,
// //     } = useDropzone({
// //             accept: '.jpeg,.png'
// //         });

// //     const [image,setImage]=useState('');
// //     const onDrop = useCallback((acceptedFiles) => {
// //         acceptedFiles.forEach((file) => {
// //         const reader = new FileReader()
// //         console.log('imagen')

// //         reader.onerror = () => {
// //             console.error('hubo un error al cargar el archivo')
// //             alert('hubo un error')
// //         }
// //         reader.onload = () => {
// //             const binaryStr = reader.result
// //             console.log(binaryStr)
// //             setImage(binaryStr)
// //         }
// //         reader.readAsDataURL(file)
// //         })
// //     }, [])

// //     function sendMovie(){
// //         const movieTitle = document.getElementById('movie_title').value;
// //         let movieList;
// //         let data = localStorage.getItem('movies');

// //         if( image === '' || movieTitle===''){
// //             console.log('ingrese archvo y título')
// //         }
// //         else{
// //             let movie = {
// //                 'name':movieTitle,
// //                 'image':image
// //             }
// //             data===null?movieList=[]:movieList=JSON.parse(data);
// //             movieList.push(movie);
// //             localStorage.setItem('movies',JSON.stringify(movieList))

// //             console.log('enviado')
// //         }
// //     }

// //     return (
// //         <div id="upload_movie">
// //             <fieldset>
// //                 <div {...getRootProps()}>
// //                     <input {...getInputProps()} />
// //                     <p>Drag 'n' drop some files here, or click to select files</p>
// //                 </div>
// //                 <input id="movie_title" type="text" placeholder="título"></input>
// //                 <div onClick={sendMovie}>enviar</div>
// //             </fieldset>
// //         </div>
// //     )
// // }