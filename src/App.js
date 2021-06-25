import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/skill" component={Skills}></Route>
      </Router>

      <footer></footer>
    </div>
  );
}

export default App;
