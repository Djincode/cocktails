import React, {useEffect,useState} from "react";
import Home from "./pages/Home";
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';
import CocktailList from "./components/CocktailList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/cocktail/:id" element={<SingleCocktail/>}/>

        </Routes>
    </Router>
  )
}

export default App;
