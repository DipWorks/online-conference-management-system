import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
