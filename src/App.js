import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Router>

      <footer></footer>
    </div>
  );
}

export default App;
