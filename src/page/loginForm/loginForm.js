// import Login from '../../components/login/Login';

// const LoginForm = () => {
//     return <Login/>
// };

// export default LoginForm;

import React from "react";
import LowComponent from '../../components/login/Login';

const HighComponent = () => {
  const highFunction = (text) => {
    console.log(text);
  }
  return (
    <LowComponent propFunction={highFunction}/>
  )
};

export default HighComponent;