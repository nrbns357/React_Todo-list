import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import { BrowserRouter, Route   } from 'react-router-dom';
import Login from './login/Login'; 
import Main from "./main/Main";
import './App.css';

function App() {
  return (
    <>
  <BrowserRouter>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/Main" component={Main}/>
    </BrowserRouter>
    </>
    )

}

export default App;
