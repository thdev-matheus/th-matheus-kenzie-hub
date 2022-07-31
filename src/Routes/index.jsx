import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import InitialPage from "../Pages/InitialPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <InitialPage />
      </Route>

      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <Route exact path="/dashboard/:user">
        <Dashboard />
      </Route>
    </Switch>
  );
}
