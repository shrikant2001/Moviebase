import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import fetcher from "./redux/movies";
import Search from "./components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies} from "./redux/movieSlice";

function App() {
  const dispatch = useDispatch();
  const [Movies,setMovies] = useState([]);
  let moviesArr = useSelector((state) => state.movies.movieArr);
  let real = moviesArr ? moviesArr : [ {Title:"No movie found"} ];

  

  return (
    <div className='App'>
      <Router>


        <Header></Header>

        <Search></Search>
        
        {real.map((m) => {
          return <h2>{m.Title}</h2>
        })}

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
