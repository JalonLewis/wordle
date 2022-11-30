import React from "react";
import { useState } from "react";
import words from "../../words.json";

//WARNING this file is in shambles, proceed at your own risk lol

function GuessTracker() {
  //The total number of guesses available per game.  Determined by the value of wordsToGuess
  let [numOfGuesses, setNumOfGuesses] = useState(0);
  // Array to store player guesses
  let [guesses, setGuesses] = useState([]);
  //The number of words to guess in order to win.  Either 1, 4, or 8
  let [wordsToGuess, setWordsToGuess] = useState(1);
  //A string representing the current guess
  let [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    if (wordsToGuess === 1) {
      numOfGuesses = 6;
    } else if (wordsToGuess === 4) {
      numOfGuesses = 8;
    } else if (wordsToGuess === 8) {
      numOfGuesses = 13;
    }
  }, []);

  //Function to generate a random word from the imported json file
  function generateWord() {
    guesses.replace(new Array(numOfGuesses).fill(""));
    currentGuess = 0;
    return words[Math.round(Math.random() * words.length)];
  }
}

export default GuessTracker;
