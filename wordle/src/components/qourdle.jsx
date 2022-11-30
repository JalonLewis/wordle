import GuessTracker from "../context/guessTracker.context";
import Keyboard from "./keyboard";

function Qourdle() {

    return (
        <div>
        <h1 className={`text-center text-light`}>Qourdle</h1>
        <Keyboard />
        </div>
    )

}

export default Qourdle;