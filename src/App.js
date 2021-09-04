import { useDispatch, useSelector } from "react-redux";

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
import UserPanel from "./components/UserPannel/UserPanel";

import ContactsPage from "./views/ContactsPage";
import LoginPage from "./views/LoginPage";

import RegisterPage from "./views/RegisterPage";
import { getIsLoggedIn, getUserToken } from "./redux/selectors/auth-selectors";
import { useEffect } from "react";
import {
  useFetchCurrentUserMutation,
  useLoginUserMutation,
} from "./redux/services/userApi";
import { setCredentials } from "./redux/slice/authSlice";
import Home from "./components/Home/Home";
function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(getIsLoggedIn);
  const [FetchCurrentUserHook, { data: userData }] =
    useFetchCurrentUserMutation();

  const userToken = useSelector(getUserToken);
  const PersistedToken = userToken;
  useEffect(() => {
    if (PersistedToken === null) {
      return;
    }
    try {
      FetchCurrentUserHook();
    } catch (error) {}
  }, [FetchCurrentUserHook, PersistedToken]);
  useEffect(() => {
    if (userToken === null) {
      return;
    }
    if (userData) {
      dispatch(
        setCredentials({
          user: userData,
          token: userToken,
        })
      );
    }
  }, [dispatch, userData, userToken]);

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
              {loggedIn && (
                <NavListItem>
                  <NavigationLink to="/contacts">Contacts</NavigationLink>
                </NavListItem>
              )}
            </NavList>
            {loggedIn && <UserPanel />}
          </Nav>
        </NavHeader>

        <Switch>
          <Route path="/register">
            {loggedIn ? <Redirect to="/contacts" /> : <RegisterPage />}
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/contacts" /> : <LoginPage></LoginPage>}
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contacts" exact>
            {!loggedIn && !userToken ? (
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
