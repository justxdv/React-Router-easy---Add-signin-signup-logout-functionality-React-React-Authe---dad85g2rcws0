import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  const isLoggedIn = true; // you can use your own authentication logic here

  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/not-found">
        <NotFound />
      </Route>
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default AppRoutes;
