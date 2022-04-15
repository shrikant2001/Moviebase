import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PNF from "./components/PNF/PNF";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/movie/:imdbid' element={ <MovieDetail/>} />
          <Route component={PNF} />
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
