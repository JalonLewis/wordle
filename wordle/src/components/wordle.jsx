import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameStats from "./gameStats";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

function Wordle(solutionWords) {
  console.log(solutionWords.solutionWords[0]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    navigate(0);
  };

  const [showModal, setShowModal] = useState(false);
  const {
    currentGuess,
    handleKeyup,
    wordleGuesses,
    solved,
    guessCounter,
    usedKeys,
  } = GameStats(solutionWords.solutionWords[0]);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);
    if (solved) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    if (guessCounter > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }),
    [handleKeyup, solved, guessCounter];
  return (
    <div>
      <GuessGrid
        guesses={wordleGuesses}
        currentGuess={currentGuess}
        guessCounter={guessCounter}
        word={solutionWords.solutionWords[0]}
      />
      <Keyboard
        usedKeys={usedKeys}
        guesses={wordleGuesses}
        word={solutionWords.solutionWords[0]}
      />
      <Modal show={showModal && solved}>
        <ModalHeader>
          <ModalTitle>You Win!</ModalTitle>
        </ModalHeader>
        <ModalBody>You found the solution in {guessCounter} guesses</ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={handleClick}>
            Home
          </button>
        </ModalFooter>
      </Modal>

      <Modal show={showModal && !solved}>
        <ModalHeader>
          <ModalTitle>You ran out of guesses...</ModalTitle>
        </ModalHeader>
        <ModalBody>Better luck next time</ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={handleClick}>
            Home
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Wordle;
