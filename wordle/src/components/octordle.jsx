import React, { useEffect } from "react";
import GameStats from "./gameStats";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";

function Octordle(solutionWords) {
  const { currentGuess, handleKeyup, octordleGuesses, solved, guessCounter, usedKeys } =
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
      <div className="row row-cols-4 row-cols-md-2 g-4">
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][0]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][1]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][2]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][3]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][4]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][5]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][6]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={octordleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={Object.values(solutionWords)[0][7]}
          />
        </div>
      </div>
      <Keyboard
        usedKeys={usedKeys}
        guesses={octordleGuesses}
        word={Object.values(solutionWords)[0]}
      />
    </div>
  );
}

export default Octordle;
