import { useState } from "react";
import words from "../../words.json";

//Parameter is a counter to track how many guesses the player has left
function GuessTracker() {
  
  //The number of words to guess in order to win.  Either 1, 4, or 8

  let numOfGuesses = 6;
  if (wordsToGuess === 4) {
    numOfGuesses = 8;
  } else if (wordsToGuess === 8) {
    numOfGuesses = 13;
  }
//The total number of guesses available per game.  Determined by the value of wordsToGuess
[currentGuess, setCurrentGuess] = useState(0)
// Array to store player guesses
[guesses, setGuesses] = useState([])



  //Function to generate a random word from the imported json file
  function generateWord() {
    guesses.replace(new Array(numOfGuesses).fill(""));
    currentGuess = 0;
    return words[Math.round(Math.random() * words.length)];
  }
}

export default GuessTracker;
