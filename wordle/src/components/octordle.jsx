import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";

function Octordle() {

    return (
        <div>
        <h1 className={`text-center text-light`}>Octordle</h1>
        <Keyboard />
        </div>
    )

}

export default Octordle;