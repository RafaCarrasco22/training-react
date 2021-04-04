import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../layout/login';
import Inicio from '../layout/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/inicio" component={Inicio}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;