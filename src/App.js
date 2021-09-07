import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Switch } from "react-router-dom";
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
import { useFetchCurrentUserQuery } from "./redux/services/userApi";
import { setCredentials } from "./redux/slice/authSlice";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

function App() {
  const dispatch = useDispatch();
  const loggedIn = useSelector(getIsLoggedIn);

  const userToken = useSelector(getUserToken);
  const PersistedToken = userToken;
  const { data: userData } = useFetchCurrentUserQuery("current", {
    skip: PersistedToken === null,
  });
  useEffect(() => {
    if (PersistedToken === null) {
      return;
    }
    if (loggedIn) {
      return;
    }
    if (userData) {
      dispatch(
        setCredentials({
          user: userData,
          token: PersistedToken,
        })
      );
    }
  }, [dispatch, userData, PersistedToken, loggedIn]);
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
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>
            <PublicRoute path="/register" restricted redirectTo="/contacts">
              <RegisterPage />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>
            <PrivateRoute path="/contacts" exact redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
