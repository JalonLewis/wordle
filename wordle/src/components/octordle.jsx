import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";

function Octordle() {
  return (
    <div>
      <Keyboard guess={"hello"} word={"guess"} />
    </div>
  );
}

export default Octordle;
