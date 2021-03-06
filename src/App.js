import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


function App() {
  return (
    
    <Router>
    <div>
    < Header />
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
