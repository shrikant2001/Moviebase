import React from 'react';
import './MovieCard.scss';

export default function MovieCard(m) {
  console.log(m);
  return (
    <div className="container">
        <span><img src={m.data.Poster} alt="" /></span>
        <h2 className='movieTitle'>{m.data.Title}</h2>
        <h2>{m.data.Year}</h2>
    </div>
  )
}
