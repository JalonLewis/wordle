import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";

function Qourdle() {
  return (
    <div>
      <Keyboard guess={"hello"} word={"guess"} />
    </div>
  );
}

export default Qourdle;
