import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";

function Wordle() {

    return (
        <div>
        <h1 className={`text-center text-light`}>Wordle</h1>
        <Keyboard />
        </div>
    )

}

export default Wordle;