import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Wordle from "./components/wordle";
import Qourdle from "./components/qourdle";
import Octordle from "./components/octordle";
import NotFound from "./components/notFound";
import Navigation from "./components/navigation";

function App() {
  return (
    <div className="App bg-dark container bg-opacity-25">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/qourdle" element={<Qourdle />} />
          <Route path="/octordle" element={<Octordle />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
