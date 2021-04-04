import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../layout/login';
import Inicio from '../layout/test';
import Personajes from '../layout/personajes';
import Capitulos from '../layout/capitulos';
// import Deaths from '../layout/deaths';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/personajes" component={Personajes}/>
        <Route exact path="/capitulos" component={Capitulos}/>
        {/* <Route exact path="/deaths" component={Deaths}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;