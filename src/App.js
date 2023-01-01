import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import React, { useEffect } from "react";
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line no-empty-pattern
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
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          } />
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;