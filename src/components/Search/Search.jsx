import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import {fetchMovies, setState } from "../../redux/movieSlice";




export default function Search() {
  
  const dispatch = useDispatch();
  let Text = "";
  let Page = useSelector((state) => state.movies.page);
  const handleChange = (e) => {
    Page = 1;
    Text = e.target.value;
    dispatch(fetchMovies( { Text,Page } ));
    dispatch(setState({Text,Page}));
  }

  return (
    
    <div>
        <input type="text" onChange={handleChange}/>
    </div>

  )
}

