import React, {useState,useEffect} from 'react'

// Components
import Movie from '../Movie/Movie';

// Styles
import '../../App.css'

const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'

export default function MovieList() {
    const [movieList,setMovieList] = useState([]);
    const [category, setCategory] = useState(0);

    useEffect(() => {
        fetch(MOVIES)
            .then(res=>res.json())
            .then(data=> {
                setMovieList(data.results.slice(0,4))
            })
            .catch(err=>console.log(err))
    }, [])

    const toggle = (e) =>{
        e.preventDefault()
        const selector = document.getElementById('category_selector')
        selector.classList.toggle("hidden")
        console.log('toggle')
    }

    const changeCategory = (a) =>{
        console.log(a)
    }

    const getLocalStorage = () => {
        let list=[];
        list = localStorage.getItem('movies')
        console.log(list)
    }

    const toggleMovies = () => {
        console.log('a')
    }

    return (
        <div>
            <span>
                <span onClick={toggle}>
                    MovieList
                </span>
                <ul id="category_selector">
                    <li onClick={(event)=>changeCategory(0)} >Populares</li>
                    <li onClick={(event)=>changeCategory(1)} >Mis películas</li>
                </ul>
            </span>
            <ul>
                {movieList.map((data,i)=>{
                    return(
                        <div key={i}>
                            <Movie movieData={data}></Movie>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
