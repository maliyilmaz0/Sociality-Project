import Home from "./Components/Home.js";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="app">
          <Home />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
