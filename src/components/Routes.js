import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import simpleform from './Forms/simpleform';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/simpleform" component={simpleform} />
    </Switch>
  </main>
);

export default Routes;
