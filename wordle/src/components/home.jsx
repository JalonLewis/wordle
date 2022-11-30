import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={`bg-dark`}>
      <ol>
        <li>
          <Link to="/wordle">Wordle</Link>
        </li>
        <li>
          <Link to="/qourdle">Qourdle</Link>
        </li>
        <li>
          <Link to="/octordle">Octordle</Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
