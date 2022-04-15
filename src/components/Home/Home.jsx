import React from 'react';
import { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieAPI from "../../common/api/movieapi";
import {APIkey} from "../../common/api/movieapikey"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        

        const fetchmovies = async() => {
            const movietext = "life"
            const res = await movieAPI.get(`?i=tt3896198&apikey=${APIkey}&s=${movietext}&type=movie`)
            .catch((err) => {
                console.log("Error : ", err);
            })
            console.log(res);
            dispatch(addMovies(res.data))
        }
        fetchmovies(); 
    },[]);

    return (
        <div>
        <div className="banner-img">

        </div>
        <MovieListing/>
        </div>
    ); 
}

export default Home;
