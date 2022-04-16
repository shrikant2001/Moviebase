import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import fetcher from "./movies";


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async({
        Text
    }) => {
        console.log("async is getting", Text);
        const dataFetch = await fetcher.get(`?apikey=e8960dea&s=${Text}&page=1`)
            .then((res) => (res.data.Search))
        console.log(dataFetch);
        return dataFetch;
    }
)


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movieArr: [],
        status: "Pending",
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = 'Pending'
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            console.log("actoin", action);
            console.log("before", state.movieArr);
            state.movieArr = action.payload;
            console.log("after", state.movieArr);
        },
        [fetchMovies.rejected]: (state) => {
            state.status = 'Rejected'
        }
    }

})
export default movieSlice.reducer;