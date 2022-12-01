import React, { useEffect } from "react";
import GameStats from "./gameStats";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";

function Qourdle(solutionWords) {
  const { currentGuess, handleKeyup, qourdleGuesses, solved, guessCounter, usedKeys } =
    GameStats((Object.values(solutionWords)[0])[0]);

    useEffect(() => {
      window.addEventListener("keyup", handleKeyup);
      if (solved) {
        window.removeEventListener("keyup", handleKeyup);
      }
      if (guessCounter > 5) {
        window.removeEventListener("keyup", handleKeyup);
      }
      return () => window.removeEventListener("keyup", handleKeyup);
    }),
      [handleKeyup, solved, guessCounter];
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={(Object.values(solutionWords)[0])[0]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={(Object.values(solutionWords)[0])[1]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={(Object.values(solutionWords)[0])[2]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={(Object.values(solutionWords)[0])[3]}
          />
        </div>
      </div>
      <Keyboard
        usedKeys={usedKeys}
        guesses={qourdleGuesses}
        word={Object.values(solutionWords)[0]}
      />
    </div>
  );
}

export default Qourdle;
