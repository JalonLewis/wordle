import React, { useState } from "react";

function Keyboard({ usedKeys }) {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  return (
    <div>
      {qwerty.map((row, index) => (
        <div key={index} className="d-flex justify-content-center">
          {row.split("").map((char) => {
            if (usedKeys !== undefined) {
              if (Object.keys(usedKeys).join("").length > 0) {
                if (Object.keys(usedKeys).join("").includes(char)) {
                  const color = usedKeys[char];
                  return (
                    <div
                      key={char}
                      className={` bg-${color} text-dark rounded-4 m-1 d-flex align-items-center justify-content-center text-uppercase`}
                      style={{ width: 50, height: 50 }}
                    >
                      {char}
                    </div>
                  );
                }
              }
            }

            return (
              <div
                key={char}
                className={`bg-light text-dark rounded-4 m-1 d-flex align-items-center justify-content-center text-uppercase`}
                style={{ width: 50, height: 50 }}
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
