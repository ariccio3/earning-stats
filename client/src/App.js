import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Results from "./pages/Results";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/Navbar";


const App = () =>
  <Router>
    <div>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results/:stock" component={Results} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>;

export default App;
