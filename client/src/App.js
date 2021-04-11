import './App.module.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Alliance from './components/alliance/Alliance';
import Branch from './components/branch/Branch';
import Login from './components/login/Login';
import Question from './components/question/Question';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={['/','/home']} exact>
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/alliance">
          <Alliance/>
        </Route>
        <Route path="/branch">
          <Branch/>
        </Route>
        <Route path="/question">
          <Question/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
