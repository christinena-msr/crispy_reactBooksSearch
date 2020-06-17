import React from 'react';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav"; 
import Search from "./pages/Search/index.js";
import Saved from "./pages/Saved/index.js";
import { StoreProvider } from './utils/GlobalState';

function App() {
  
  return (
    <StoreProvider>
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route exact path={["/", "/search"]} component={Search}/>
            <Route exact path="/saved" component={Saved} />
          </Switch>
      </div>
    </Router>
    </StoreProvider>
  );
}

export default App;
