import React from 'react';
import { Route, Switch } from 'react-router-dom';

import User from '~/pages/User';
import Repository from '~/pages/Repository';

export default function routes() {
  return (
    <Switch>
      <Route exact path="/" component={User} />
      <Route exact path="/:user" component={Repository} />
    </Switch>
  );
}
