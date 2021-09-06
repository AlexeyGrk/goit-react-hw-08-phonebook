import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import {
  getIsLoggedIn,
  getUserToken,
} from "../../redux/selectors/auth-selectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userToken = useSelector(getUserToken);
  return (
    <Route {...routeProps}>
      {!isLoggedIn && !userToken ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
