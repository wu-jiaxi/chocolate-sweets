import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
