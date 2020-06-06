import React from 'react';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/index.js";
import Saved from "./pages/Saved/index.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
