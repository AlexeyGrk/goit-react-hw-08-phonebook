import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import "./App.css";

import ContactsPage from "./views/ContactsPage";
import LoginPage from "./views/LoginPage";

import RegisterPage from "./views/RegisterPage";

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
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/" exact>
            <h1>Start Page</h1>
          </Route>
          <Route path="/contacts" exact>
            <ContactsPage></ContactsPage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
