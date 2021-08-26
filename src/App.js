import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import {
  NavHeader,
  Nav,
  NavList,
  NavListItem,
  NavigationLink,
} from "./App.styled";

import ContactsPage from "./views/ContactsPage";
import LoginPage from "./views/LoginPage";

import RegisterPage from "./views/RegisterPage";

function App() {
  const loggedIn = useSelector((state) => state.setCredentials.isLogin);
  return (
    <Router>
      <div className="App">
        <NavHeader>
          <Nav>
            <NavList>
              <NavListItem>
                <NavigationLink to="/">Home</NavigationLink>
              </NavListItem>
              {!loggedIn && (
                <NavListItem>
                  <NavigationLink to="/register">Register</NavigationLink>
                </NavListItem>
              )}
              {!loggedIn && (
                <NavListItem>
                  <NavigationLink to="/login">Login</NavigationLink>
                </NavListItem>
              )}
              <NavListItem>
                <NavigationLink to="/contacts">Contacts</NavigationLink>
              </NavListItem>
            </NavList>
          </Nav>
        </NavHeader>

        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/contacts" /> : <LoginPage></LoginPage>}
          </Route>
          <Route path="/" exact>
            <h1>Start Page</h1>
          </Route>
          <Route path="/contacts" exact>
            {!loggedIn ? (
              <Redirect to="/login" />
            ) : (
              <ContactsPage></ContactsPage>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
