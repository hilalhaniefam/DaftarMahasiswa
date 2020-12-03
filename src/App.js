//import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Homepage from './components/pages/Homepage';
import DaftarMahasiswa from './components/pages/DaftarMahasiswa';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/myprofile' exact component={Homepage}/>
        <Route path='/listmahasiswa' exact component={DaftarMahasiswa}/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
