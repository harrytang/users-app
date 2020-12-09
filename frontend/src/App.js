import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Posts from './components/Posts/Posts'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/signin' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path="/posts" component={Posts} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
