import { useState } from "react";
import Main from "../main/Main";
import './Login.css';

const Login = () => {
    const [loginForm,setLoginForm]= useState(false);
    const [user,setUser] = useState({
        id: '',
        pass:''
    });

    return (
        <>
        <div className="main">
                <input type="text" name="id" onChange={user.id}  placeholder="id" className="id input"></input>
                <input type="password" name="pass" onChange={user.pass} placeholder="password" className="pass input"></input>
                <input type="submit" onClick={()=>{
                    fetch(`/API/login.php?id=${user.id?.target.value}&pass=${user.pass?.target.value}`)
                    .then((response) => response.json());
                }} className="sub"/>
        </div>
        {loginForm ? <Main/> : null}
        </>
    );
};

export default Login;