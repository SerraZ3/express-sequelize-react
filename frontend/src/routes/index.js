import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ListUsers from "../pages/ListUsers";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={ListUsers} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
