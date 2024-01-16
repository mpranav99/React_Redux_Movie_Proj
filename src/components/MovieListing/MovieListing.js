import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./MovieListing.scss"

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    // const allData =  { movies:movies , shows : shows};
    // console.log(allData)
    let renderMovies = movies.Response==="True" ? (
        movies.Search.map((movie,index)=>{
           return <MovieCard key={index} data={movie} />
        })
    ) : (
        <div className='movie-err'>
            <h3>{movies.Error}</h3>
        </div>
    );
    let renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index)=>{
            return <MovieCard key={index} data={show}></MovieCard>
        })
    ) :(
        <div className='show-err'>
            <h3>{shows.Error}</h3>
        </div>
    )
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2> Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
            <div className='show-list'>
                <h2> Shows</h2>
                <div className='show-container'>{renderShows}</div>
            </div>
        </div>
        
    );
};

export default MovieListing;