import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Students from "./views/students/Students";
import Random from "./views/random/Random";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/randomstudent" component={Random} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
