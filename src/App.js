import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Skills from "./components/pages/Skills";

import Contact from "./components/pages/Contact";
import TwoColumnContainer from "./components/TwoColumnContainer";

import Navigation from "./components/Navigation";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Row style={{ width: "100vw" }}>
          <Col sm={1}>
            <Navigation />
          </Col>
          <Col sm={11}>
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
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
