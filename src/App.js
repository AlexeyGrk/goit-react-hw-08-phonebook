import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
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
  LoaderContainer,
} from "./App.styled";
import UserPanel from "./components/UserPannel/UserPanel";

import { getIsLoggedIn, getUserToken } from "./redux/selectors/auth-selectors";
import { lazy, Suspense, useEffect } from "react";
import {
  useFetchCurrentUserMutation,
  useLoginUserMutation,
} from "./redux/services/userApi";
import { setCredentials } from "./redux/slice/authSlice";

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
  const HomePage = lazy(() =>
    import("./views/HomePage" /* webpackChunkName: "HomePage" */)
  );
  const ContactsPage = lazy(() =>
    import("./views/ContactsPage" /* webpackChunkName: "ContactsPage" */)
  );
  const LoginPage = lazy(() =>
    import("./views/LoginPage" /* webpackChunkName: "LoginPage" */)
  );
  const RegisterPage = lazy(() =>
    import("./views/RegisterPage" /* webpackChunkName: "RegisterPage" */)
  );
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
        <Suspense
          fallback={
            <LoaderContainer>
              <Loader
                type="MutatingDots"
                color="tomato"
                height={80}
                width={80}
                timeout={3000}
              />
            </LoaderContainer>
          }
        >
          <Switch>
            <Route path="/register">
              {loggedIn ? <Redirect to="/contacts" /> : <RegisterPage />}
            </Route>
            <Route path="/login">
              {loggedIn ? <Redirect to="/contacts" /> : <LoginPage></LoginPage>}
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/contacts" exact>
              {!loggedIn && !userToken ? (
                <Redirect to="/login" />
              ) : (
                <ContactsPage></ContactsPage>
              )}
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
