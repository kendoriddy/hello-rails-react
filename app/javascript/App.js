import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import Greeting from "./pages/Greeting";

const App = () => {
  return <>
   <h2>Greeting App </h2>
    <Routes>
      <Route path="/" element={<Greeting/>}/>
    </Routes>
  </>
}

export default App;