import React, { useState } from 'react';
import user from "../../images/user-img.jpg"
import "./Header.scss";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const submitSearch = (e)=>{
        e.preventDefault();
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setTerm("");
    }
    return (
        <div className='header'>
        <div className='heading'>
            <Link to="/"> 
                MovieApp
            </Link>
        </div>
           <div className='search-bar'>
                <form onSubmit={submitSearch}>
                    <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}/>
                    <button type='submit'><i className='fa fa-search'></i></button>
                </form>
           </div>
           <div className='user-img'>
                <img src={user} alt="" />
           </div>
        </div>
    );
};

export default Header;