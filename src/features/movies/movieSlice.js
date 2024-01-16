import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { APIKey } from '../../common/api/movieApiKey';
import movieApi from "../../common/api/MovieAPI";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(term)=>{
    const data = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`).catch((err)=>{
        console.log("Err : ", err);
    });
    return data.data;
})

export const fetchAsyncShows = createAsyncThunk("shows/fetchAsyncShows", async(term)=>{
    const response  = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`).catch((err)=>{
        console.log(err);
    })
    // console.log(response.data)
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk("selectedMovieOrShow/fetchAsyncMovieOrShowDetail",
    async (id)=>{
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
    }
    )

const initialState = {
    moviesData : {},
    seriesData : {},
    selectedMovieOrShow : {},
}

const movieSlice = createSlice({
    name : "movies", 
    initialState,
    reducers : {
        removeSelectedMoviesOrShow : (state) =>{
            state.selectedMovieOrShow ={};
        },
        removeSearchedMoviesOrShows : (state) =>{
            state.moviesData = fetchAsyncMovies("Harry");
            state.seriesData = fetchAsyncShows("Friends");
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : ()=>{
            console.log("PEnding!")
        }, 
        [fetchAsyncMovies.fulfilled] : (state , {payload})=>{
            console.log("Fullfilled");
            return {...state , moviesData :  payload};
        },
        [fetchAsyncMovies.rejected] : ()=>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled] : (state , {payload})=>{
            console.log("Fullfilled" );
            return {...state , seriesData :  payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state , {payload})=>{
            console.log("Fullfilled" );
            return {...state , selectedMovieOrShow :  payload};
        },
    }
})

export const {removeSelectedMoviesOrShow , removeSearchedMoviesOrShows} = movieSlice.actions;
export const getAllMovies = (state) =>state.movies.moviesData;
export const getAllShows = (state) => state.movies.seriesData;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;