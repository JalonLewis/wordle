import React, { useState } from "react";

function Keyboard({ guess, word }) {
  const qwerty = ["qwertyuiop", "asdfghjkl", "[zxcvbnm]"];
  let tempGuess = "";

  const handleClick = (char) => () => {
    if (char === "[" && tempGuess.length >= 1) {
      tempGuess = tempGuess.slice(0, -1);
    } else if (char === "]" && tempGuess.length === 5) {
      guess = tempGuess;
      tempGuess = "";
    } else if (tempGuess.length < 5 && char != "[" && char != "]") {
      tempGuess += char;
    }
  };

  return (
    <div>
      {qwerty.map((row, index) => (
        <div key={index} className="d-flex justify-content-center">
          {row.split("").map((char) => {
            let bgColor = "bg-light";
            let txtColor = "text-dark";
            if (word.includes(char) && guess.includes(char)) {
              bgColor = "bg-warning";
              txtColor = "text-light";
            } else if (guess.includes(char)) {
              bgColor = "bg-secondary";
              txtColor = "text-light";
            }
            return (
              <div
                key={char}
                className={`${bgColor} ${txtColor} rounded-4 m-1 d-flex align-items-center justify-content-center text-uppercase`}
                style={{ width: 50, height: 50 }}
                onClick={handleClick(char)}
              >
                {char}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
