// import './Login.css';

// const Login = () => {
//     return (
//         <main className="mainBar">
//             <div className="LoginFormContainer">
//                <input type="text" placeholder="아이디입력"/>
//                <input type="password" placeholder="비밀번호입력"/>
//                <input type="submit" value="로그인"/>
//             </div>
//         </main>
//     );
// };

// export default Login;

import React, { useState } from "react";

const LowComponent = (props) => {
  const [text, setText] = useState("");
  
  const textChangeHandler = (e)=> {
    setText(e.currentTarget.value);
  }
  
  const submitText = () => {
    props.propFunction(text)
  }
  
  return (
      <>
    <input value={text} onChange={textChangeHandler}/>
    <button onClick={submitText}>submit</button>
      </>
  )
}

export default LowComponent;