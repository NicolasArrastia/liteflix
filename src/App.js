import React, {useState,useEffect} from 'react'
// import React, { Component } from 'react'

// Styles
import './App.css';

// Components
import Header from './components/Header/Header'
import UploadMovie from './components/UploadMovie/UploadMovie'
import MovieList from './components/MovieList/MovieList'

const BANNER = 'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'


export default function App() {
  const [movieName,setMovieName] = useState();
  const [movieImage,setMovieImage] = useState();
  
  useEffect(() => {    
    fetch(BANNER)
    .then(res=>res.json())
    .then(data=> {
      setMovieName(data.results[0].title)
      setMovieImage('https://image.tmdb.org/t/p/w500'+data.results[0].backdrop_path)
    })
    .catch(err=>{
      console.log(err);
      setMovieName('Error')
    })
  }, [])



  
  return (
    <div>
        <Header></Header>
        <img src={movieImage} alt={movieName}/>
        <UploadMovie></UploadMovie>
        <MovieList></MovieList>
    </div>
  )
}