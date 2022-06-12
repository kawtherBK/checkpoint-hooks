import './App.css';
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/ModalInput';
import MovieList from './components/MovieList'
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Description from "./components/Description";
import {Routes, Route } from "react-router-dom";

const App = ()=>{
  const [movies , setMovies] = useState([
    {
    id : uuidv4(),
    title: "la reine des neiges 2",
    description: "Anna, une jeune fille aussi audacieuse qu’optimiste, se lance dans un incroyable voyage en compagnie de Kristoff",
    posterUrl :'/assets/images/la reine.jpeg',
    rate : "5"
  },
  {
    id : uuidv4(),
    title: "The gradge",
    description: " Une jeune femme japonaise détient le secret qui pourrait mettre fin à la malédiction des Saeki.",
    posterUrl : '/assets/images/gradge.jpg',
    rate : "3"
  },
  {
    id : uuidv4(),
    title: "Jumanji",
    description: "Quatre lycéens découvrent une vieille console contenant un jeu vidéo dont ils n’avaient jamais entendu parler : Jumanji.",
    posterUrl :  '/assets/images/Jumanji.jpg',
    rate : "2"
  }
]);
const addMovie = (newMovie)=>{
      setMovies(movies.concat(newMovie))
  }
  
  return ( 
    
  <div className="App-header">
    <Routes>
 
   {/* <Add addMovie = {(newMovie)=>addMovie(newMovie)}/> */}
   <Route path="/description/:id" element={<Description movies={movies} />} />
   <Route path="/" element={
   <>
    <MovieList movies= {movies }/> 
    <Add addMovie = {(newMovie)=>addMovie(newMovie)}/>
   </>
   
   }></Route>
     
   </Routes>
  </div>
 
      
  );

}

export default App;
