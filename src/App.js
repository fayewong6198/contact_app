import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route axact path="/login" component={Login}></Route>
        <Route axact path="/register" component={Register}></Route>
        <Route axact path="/" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
