import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;