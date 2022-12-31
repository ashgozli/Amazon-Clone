import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import React, { useEffect } from "react";
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //Only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>>', authUser);
      if (authUser) {
        //User logged in or was already logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //User is logged out or no account
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
