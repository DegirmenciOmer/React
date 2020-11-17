import "./App.css";
import React, { useState } from "react";
import Friend from "./components/Exercise-1/Friend";
import DogGallery from "./components/Exercise-2/DogGallery";
import RandomJoke from "./components/Exercise-3/RandomJoke";
function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
