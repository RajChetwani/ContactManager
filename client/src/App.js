import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState'
import { Register } from './components/auth/Register';
import  { Login } from './components/auth/Login'
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken'
import  { PrivateRoute } from './components/routing/PrivateRoute'

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const  App = () => {
  return (
   <AuthState>
   <ContactState>
   <AlertState>
   <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="container">
       <Switch>
        <PrivateRoute exact path='/' component={Home}></PrivateRoute>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
       </Switch>
      </div>
    </div>
   </BrowserRouter>
   </AlertState>
   </ContactState>
   </AuthState>
  );
}

export default App;
