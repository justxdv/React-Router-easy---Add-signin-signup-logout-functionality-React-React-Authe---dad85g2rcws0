import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
