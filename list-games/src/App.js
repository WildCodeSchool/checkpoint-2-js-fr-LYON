import React from 'react';
import './App.css';
import GameList from './components/GameList';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Game from './components/Game';
import ShortScreen from './components/ShortScreen';

function App () {

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route exact path='/jeu/screenshots/:id' render={(props) => (<ShortScreen {...props} /> )} />
      </Switch>
      </Router>
    </div>
  );
  }

export default App;
