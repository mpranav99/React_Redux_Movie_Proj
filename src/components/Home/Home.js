import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch} from "react-redux";
// import { removeSearchedMoviesOrShows } from '../../features/movies/movieSlice';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchAsyncMovies("Harry"));
        dispatch(fetchAsyncShows("Friends"));
    },[dispatch]);

    return (
        <div className='banner'>
            <MovieListing />
        </div>
    );
};

export default Home;