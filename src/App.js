import React from 'react';
import {BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
            <Route path="*" element={<PageNotFound />} ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
