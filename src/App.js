import  {Router} from "react";
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
