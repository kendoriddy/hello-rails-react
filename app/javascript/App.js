import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";

const App = () => {
  return <>
   <h1>Greeting App </h1>
   <h2>Wishing you the best!</h2>
    <Routes>
      <Route path="/" element={<Greeting/>}/>
    </Routes>
  </>
}

export default App;