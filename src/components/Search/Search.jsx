import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import {fetchMovies } from "../../redux/movieSlice";




export default function Search() {
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let Text = e.target.value;
    dispatch(fetchMovies( { Text } ));
  }

  return (
    
    <div>
        <input type="text" onChange={handleChange}/>
    </div>

  )
}

