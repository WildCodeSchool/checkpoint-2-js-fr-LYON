import React from 'react';
import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App () {
  return (
    <Router>
      <div className='App'>
        <Header /> 
        <Main />
      </div>
    </Router>
  );
}

export default App;
