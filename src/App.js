import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="my-container">
          <Navigation />

          <div className="my-content">
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/project" component={Project}></Route>
              <Route path="/skill" component={Skills}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </div>
        {/* <Row style={{ width: "100vw" }}>
          <Col sm={1}></Col>
          <Col sm={11}>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/project" component={Project}></Route>
              <Route path="/skill" component={Skills}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Col>
        </Row> */}
      </Router>
    </div>
  );
}

export default App;
