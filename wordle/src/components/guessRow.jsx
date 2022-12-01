import React from "react";

function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        {guess.map((letter, index) => (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-center text-uppercase border m-1 bg-${letter.color}`}
            style={{ width: 60, height: 60 }}
          >
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="d-flex align-items-center justify-content-center">
        {letters.map((letter, index) => (
          <div
            key={index}
            className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
            style={{ width: 60, height: 60 }}
          >
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index} className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
          style={{ width: 60, height: 60 }}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
        style={{ width: 60, height: 60 }}
      ></div>
      <div
        className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
        style={{ width: 60, height: 60 }}
      ></div>

      <div
        className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
        style={{ width: 60, height: 60 }}
      ></div>
      <div
        className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
        style={{ width: 60, height: 60 }}
      ></div>
      <div
        className={`d-flex align-items-center justify-content-center text-uppercase border m-1`}
        style={{ width: 60, height: 60 }}
      ></div>
    </div>
  );
}

export default Row;
