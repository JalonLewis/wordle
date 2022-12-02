import React, { useEffect } from "react";
import GameStats from "./gameStats";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";

function Qourdle(solutionWords) {

  const {
    currentGuess,
    handleKeyup,
    qourdleGuesses,
    solved,
    guessCounter,
    usedKeys,
  } = GameStats(solutionWords.solutionWords[0]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (solved) {
      window.removeEventListener("keyup", handleKeyup);
    }
    if (guessCounter > 8) {
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }),
    [handleKeyup, solved, guessCounter];

  return (
    <div>
      <p>{solutionWords.solutionWords[0]}</p>
      <p>{solutionWords.solutionWords[1]}</p>
      <p>{solutionWords.solutionWords[2]}</p>
      <p>{solutionWords.solutionWords[3]}</p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
          />
        </div>
      </div>
      <Keyboard usedKeys={usedKeys} />
    </div>
  );
}

export default Qourdle;
