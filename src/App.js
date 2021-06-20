import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation />
        </header>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
