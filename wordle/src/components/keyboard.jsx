import React, { useState } from "react";

function Keyboard() {
  const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  function handleClick() {
//     if (letter in correct position) {
//     shading = 'bg-success'
//     }
//     else if (letter in word) {
//         shading = 'bg-warning'
//     }
//     else {
//         shading = 'bg-secondary'
//   }
}
  return (
    <div>
      {qwerty.map((row, index) => (
        <div key={index} className="d-flex justify-content-center">
          {row.split("").map((char) => {
            // To do: add check for shading color 
            let shading = 'bg-light'
            return (
            <div key={char}
            className={`${shading} rounded-4 m-1 d-flex align-items-center justify-content-center text-uppercase`} style={{width: 50, height: 50}} onClick={handleClick}>
                {char}
            </div>
          )})}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
