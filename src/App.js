import React from 'react';
import Main from './page/mainBar/MainBar';
import Login from './page/loginForm/loginForm';
import './App.css';

document.title='Todo list';

const App = () => {
  return (
    <div className="main">
         <Login/>
         <Main/>
    </div>
  );
};

export default App;
