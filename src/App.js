import React from 'react';
import './App.css';
import Main from './page/mainBar/MainBar';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import Login from './page/loginForm/loginForm';

document.title='Todo list';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/Main">Main</Link>
      </li>
    </ul>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/Main" component={Main}/>
    </BrowserRouter>
    </>
  );
};

export default App;
