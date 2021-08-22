import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";
import Phonebook from "./components/Phonebook/Phonebook";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Register</NavLink>
            </li>
            <li>
              <NavLink to="/users">Login</NavLink>
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
