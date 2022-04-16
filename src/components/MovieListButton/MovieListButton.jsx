import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchMovies,setState } from '../../redux/movieSlice';
import './MovieListButton.scss';

export default function MovieListButton() {

  const dispatch = useDispatch();
  let Text = useSelector((state) => state.movies.query);
  let Page = useSelector((state) => state.movies.page);
  const handleClick = () => {
    Page += 2;
    dispatch(fetchMovies( { Text,Page } ));
    dispatch(setState({Text,Page}));
  }
  return (
    <button onClick={handleClick}>NEXT</button>
  )
}
