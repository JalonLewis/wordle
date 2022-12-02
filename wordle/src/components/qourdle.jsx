import React, { useEffect } from "react";
import GameStats from "./gameStats";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";

function Qourdle(solutionWords) {
  // console.log(solutionWords.solutionWords[0]);
  console.log(solutionWords.solutionWords[0])
  // console.log(solutionWords.solutionWords[1]);
  // console.log(solutionWords.solutionWords[2]);
  // console.log(solutionWords.solutionWords[3]);

  const currentGuess = GameStats(solutionWords.solutionWords[0]).currentGuess;
  const handleKeyup = GameStats(solutionWords.solutionWords[0]).handleKeyup;
  const qourdleGuesses = GameStats(
    solutionWords.solutionWords[0]
  ).qourdleGuesses;
  const solved = GameStats(solutionWords.solutionWords[0]).solved;
  const guessCounter = GameStats(solutionWords.solutionWords[0]).guessCounter;
  const usedKeys = GameStats(solutionWords.solutionWords[0]).usedKeys;

  // const currentGuess2 = GameStats(solutionWords.solutionWords[1]).currentGuess;
  // const handleKeyup2 = GameStats(solutionWords.solutionWords[1]).handleKeyup;
  // const qourdleGuesses2 = GameStats(
  //   solutionWords.solutionWords[1]
  // ).qourdleGuesses;
  // const solved2 = GameStats(solutionWords.solutionWords[1]).solved;
  // const guessCounter2 = GameStats(solutionWords.solutionWords[1]).guessCounter;
  // const usedKeys2 = GameStats(solutionWords.solutionWords[1]).usedKeys;

  // const currentGuess3 = GameStats(solutionWords.solutionWords[2]).currentGuess;
  // const handleKeyup3 = GameStats(solutionWords.solutionWords[2]).handleKeyup;
  // const qourdleGuesses3 = GameStats(
  //   solutionWords.solutionWords[2]
  // ).qourdleGuesses;
  // const solved3 = GameStats(solutionWords.solutionWords[2]).solved;
  // const guessCounter3 = GameStats(solutionWords.solutionWords[2]).guessCounter;
  // const usedKeys3 = GameStats(solutionWords.solutionWords[2]).usedKeys;

  // const currentGuess4 = GameStats(solutionWords.solutionWords[3]).currentGuess;
  // const handleKeyup4 = GameStats(solutionWords.solutionWords[3]).handleKeyup;
  // const qourdleGuesses4 = GameStats(
  //   solutionWords.solutionWords[3]
  // ).qourdleGuesses;
  // const solved4 = GameStats(solutionWords.solutionWords[3]).solved;
  // const guessCounter4 = GameStats(solutionWords.solutionWords[3]).guessCounter;
  // const usedKeys4 = GameStats(solutionWords.solutionWords[3]).usedKeys;

  useEffect(() => {
    console.log(currentGuess)
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

  // useEffect(() => {
  //   window.addEventListener("keyup", handleKeyup2);
  //   if (solved2) {
  //     window.removeEventListener("keyup", handleKeyup2);
  //   }
  //   if (guessCounter2 > 5) {
  //     window.removeEventListener("keyup", handleKeyup2);
  //   }
  //   return () => window.removeEventListener("keyup", handleKeyup2);
  // }),
  //   [handleKeyup2, solved2, guessCounter2];

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={solutionWords.solutionWords[0]}
          />
        </div>
        {/* <div className="col">
          <GuessGrid
            guesses={qourdleGuesses}
            currentGuess={currentGuess}
            guessCounter={guessCounter}
            word={solutionWords.solutionWords[1]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses3}
            currentGuess={currentGuess3}
            guessCounter={guessCounter3}
            word={solutionWords.solutionWords[2]}
          />
        </div>
        <div className="col">
          <GuessGrid
            guesses={qourdleGuesses4}
            currentGuess={currentGuess4}
            guessCounter={guessCounter4}
            word={solutionWords.solutionWords[3]}
          />
        </div> */}
      </div>
      <Keyboard
        usedKeys={usedKeys}
        guesses={qourdleGuesses}
        word={solutionWords.solutionWords[0]}
      />
    </div>
  );
}

export default Qourdle;
