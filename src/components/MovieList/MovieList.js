import React, {useState,useEffect} from 'react'

// Components
import Movie from '../Movie/Movie';

// Styles
// import '../../App.css'


const MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'

export default function MovieList() {
    const [movieList,setMovieList] = useState([]);
    const [myMovies, setMyMovies] = useState([]);
    const [category, setCategory] = useState(0);

    useEffect(() => {
        fetch(MOVIES)
            .then(res=>res.json())
            .then(data=> {
                setMovieList(data.results.slice(0,4))
            })
            .catch(err=>console.log(err))
            let list = localStorage.getItem('movies')
            if(list === null)
                console.log('es null')
            else
                setMyMovies(JSON.parse(list))
    }, [])

    const toggle = () =>{
        const selector = document.getElementById('category_selector');
        selector.classList.toggle("hidden");
    }

    const changeCategory = (a) =>{
        setCategory(a);
        toggle();
    }

    return (
        <div>
            <span>
                <span className="category-selector" onClick={toggle}>
                    ver: {(category)?<span>mis películas</span>:<span>popular</span>}
                </span>
            </span>
            <ul className="category-list" id="category_selector">
                <li onClick={(event)=>changeCategory(0)}>Populares</li>
                <li onClick={(event)=>changeCategory(1)}>Mis películas</li>
            </ul>
            {
            (category===1)?
            <ul>
                {
                myMovies.map((data,i)=>{
                    return(
                        <li key={i}>
                            <Movie isLocal={1} movieData={data}></Movie>
                        </li>
                    )
                })
                }
            </ul>
            :
            <ul>
                {movieList.map((data,i)=>{
                    return(
                        <li key={i}>
                            <Movie movieData={data}></Movie>
                        </li>
                    )
                })}
            </ul>
            }
        </div>
    )
}
