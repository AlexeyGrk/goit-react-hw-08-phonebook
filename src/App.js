import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
          <Route path="/" exact>
            <Phonebook />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
