import { useState } from "react";
import dictionary from "../../dictionary.json";

const GameStats = (word) => {
  let [guessCounter, setGuessCounter] = useState(0);
  let [currentGuess, setCurrentGuess] = useState("");
  const [wordleGuesses, setWordleGuesses] = useState([...Array(6)]);
  const [qourdleGuesses, setQourdleGuesses] = useState([...Array(8)]);
  const [octordleGuesses, setOctordleGuesses] = useState([...Array(13)]);
  const [pastGuesses, setPastGuesses] = useState([]);
  const [solved, setSolved] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  function formatGuess() {
    let solutionLetters = [...word];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "secondary" };
    });
    formattedGuess.forEach((letter, index) => {
      if (word[index] === letter.key) {
        formattedGuess[index].color = "success";
        solutionLetters[index] = null;
      }
    });
    formattedGuess.forEach((letter, index) => {
      if (solutionLetters.includes(letter.key) && letter.color !== "success") {
        formattedGuess[index].color = "warning";
        solutionLetters[solutionLetters.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  }

  function addGuess(formattedGuess) {
    if (currentGuess === word) {
      setSolved(true);
    }
    setWordleGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[guessCounter] = formattedGuess;
      return newGuesses;
    });
    setQourdleGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[guessCounter] = formattedGuess;
      return newGuesses;
    });
    setOctordleGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[guessCounter] = formattedGuess;
      return newGuesses;
    });
    setPastGuesses((prevGuesses) => {
      return [...prevGuesses, currentGuess];
    });
    setGuessCounter((prevGuessCounter) => {
      return prevGuessCounter + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "success") {
          newKeys[letter.key] = "success";
          return;
        }
        if (letter.color === "warning" && currentColor !== "success") {
          newKeys[letter.key] = "warning";
          return;
        }
        if (
          letter.color === "secondary" &&
          currentColor !== "success" &&
          currentColor !== "warning"
        ) {
          newKeys[letter.key] = "secondary";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  }

  function handleKeyup({ key }) {
    if (key === "Enter") {
      if (pastGuesses.includes(currentGuess)) {
        return;
      }
      if (!dictionary.includes(currentGuess.toUpperCase())) {
        return;
      }
      if (currentGuess.length != 5) {
        return;
      }
      const formatted = formatGuess();
      addGuess(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  }

  return { guessCounter, currentGuess, wordleGuesses, qourdleGuesses, octordleGuesses, solved, usedKeys, handleKeyup };
};

export default GameStats;
