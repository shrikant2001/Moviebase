import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    act
} from "react-dom/test-utils";

import fetcher from "./movies";


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async({
        Text,
        Page
    }) => {
        console.log("async is getting", Text);
        const dataFetch = await fetcher.get(`?apikey=e8960dea&s=${Text}&page=${Page}`)
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
        page: 1,
        query: "",
    },
    reducers: {
        setState: (state, action) => {
            console.log("Hello", action);
            state.page = action.payload.Page;
            state.query = action.payload.Text;

        }
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            state.status = 'Pending'
        },
        [fetchMovies.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            // console.log("actoin", action);
            // console.log("before", state.movieArr);
            state.movieArr = action.payload;
            console.log("query", state.query)
                // console.log("after", state.movieArr);
        },
        [fetchMovies.rejected]: (state) => {
            state.status = 'Rejected'
        }
    }

})
export const {
    setState
} = movieSlice.actions;
export default movieSlice.reducer;