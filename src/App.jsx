import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter as Router,Routes,Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import MovieListButton from "./components/MovieListButton/MovieListButton";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  let moviesArr = useSelector((state) => state.movies.movieArr);
  let real = moviesArr ? moviesArr : [ {Title:"No movie found"} ];

  

  return (
    <div className='App'>
      <Router>


        <Header/>
        <Search></Search>
        
        {real.map((m) => {
          return(<MovieCard key={m.imdbID} data={m} />)
          
        })}
        <MovieListButton/>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
