import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Page/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
  );
};

