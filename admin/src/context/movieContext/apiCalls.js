import { createMoviesFailure, createMoviesStart, createMoviesSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import axios from "axios"

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())

    try{
        const res = await axios.get("http://localhost:8000/api/movie/", {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })

        dispatch(getMoviesSuccess(res.data))
    }
    catch(err){
        dispatch(getMoviesFailure())
        console.log(err)
    }
}




export const createMovie = async (movie, dispatch) => {
    dispatch(createMoviesStart())

    try{
        const res = await axios.post(`http://localhost:8000/api/movie/`, movie , {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(createMoviesSuccess(res.data))
    }
    catch(err){
        dispatch(createMoviesFailure())
    }
}


export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())

    try{
        await axios.delete(`http://localhost:8000/api/movie/${id}`, {
            headers: {
                "token": "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        })
        dispatch(deleteMovieSuccess(id))
    }
    catch(err){
        dispatch(deleteMovieFailure())
    }
}