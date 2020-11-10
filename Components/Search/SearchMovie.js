import React from 'react'
import { useSelector } from "react-redux";
import SearchMovieItem from './SearchMovieItem';
import NotFound from '../NotFound';


function SearchMovie() {

    const searchMovies = useSelector((state) => state.mainReducer.searchMovies);

    console.log("searchMovie", searchMovies);
    return (
        <div className='searchMovie'>

        {searchMovies === undefined ? <NotFound/> : (searchMovies.map((item) => (
            <SearchMovieItem
                img={console.log(item)}
                img={item.Poster}
                title={item.Title}
                type={item.Type}
                year={item.Year}
                key={item.imdbID}
            />
        )))}

        </div>
    )
}

export default SearchMovie 
