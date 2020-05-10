import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Screenshots from '../components/Screenshots';
import Home from '../components/Home';

function Main () {
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/jeu/screenshots/:id' component={Screenshots} />
      </Switch>
    </main>
  );
}

export default Main;
