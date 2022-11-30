import React from "react";
import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";
import GuessGrid from "./GuessGrid";

function Wordle() {
  return (
    <div>
      {new Array(5).fill().map((_, i) => (
        <GuessGrid key={i} guess={"hello"} word={"guess"} />
      ))}
      <Keyboard guess={"hello"} word={"guess"} />
    </div>
  );
}

export default Wordle;
