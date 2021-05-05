import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <Home></Home>
      <Contact></Contact>
      <Portfolio></Portfolio>

    </Router>
  );
}

export default App;
