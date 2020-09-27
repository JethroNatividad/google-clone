import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

function App() {
  //Routes
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/search/:term'>
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
