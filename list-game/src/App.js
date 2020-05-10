import React from 'react';
import './App.css';
import GameList from './components/GameList';
import Screenshots from './components/Screenshots';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <GameList />
          </Route>

          <Route
            path='/:name/screenshots/:id'
            render={(props) => (<Screenshots {...props} />)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
