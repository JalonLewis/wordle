import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Wordle from "./components/wordle";
import Qourdle from "./components/qourdle";
import Octordle from "./components/octordle";
import NotFound from "./components/notFound";
import Navigation from "./components/navigation";
import words from "../words.json";

function App() {
  function generateRandomWords() {
    let output = [];
    for (let i = 0; i < 8; i++) {
      output.push(words[Math.round(Math.random() * words.length)]);
    }
    return output;
  }

  let solutionWords = generateRandomWords();
  return (
    <div className="App bg-dark container bg-opacity-25">
      {solutionWords!=undefined && (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/wordle" element={<Wordle solutionWords={solutionWords[0]} />} />
            <Route path="/qourdle" element={<Qourdle solutionWords={solutionWords} />} />
            <Route path="/octordle" element={<Octordle solutionWords={solutionWords} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
