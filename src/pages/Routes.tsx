import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Resource from './Resource';
import User from './User';
export function Routes() {
  let { url } = useRouteMatch();
  return (
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path={`/:userName/:resourceId`} component={Resource} />
      <Route path="/:userName" component={User} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
