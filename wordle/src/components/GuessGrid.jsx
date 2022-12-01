import React from "react";
import Row from "./guessRow";

function GuessGrid({ guesses, currentGuess, guessCounter, word }) {
  return (
    
    <div className="card mb-4 border-0 bg-transparent">
      {guesses.map((guess, index) => {
        if (guessCounter === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </div>
  );
}

export default GuessGrid;

