import "./App.css";
import Home from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "./components/Profile";
import Upload from "./components/Upload";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/upload" component={Upload} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
