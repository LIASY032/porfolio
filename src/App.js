import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

import Contact from "./components/pages/Contact";
import TwoColumnContainer from "./components/TwoColumnContainer";

function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <TwoColumnContainer>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/project" component={Project}></Route>
            <Route path="/skill" component={Skills}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </TwoColumnContainer>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
