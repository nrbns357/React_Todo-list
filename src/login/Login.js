import React,{useState} from 'react';
import {connect} from "react-redux";
//import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userInfo,setUserInfo] = useState();
    //const history = useHistory() (나중에 쓸 예정)

    return (
        <>
        <section>
        <input
          type="text"
          onChange={setUserId}
          placeholder="id"
          className="todoId todoInput"
          ></input>
        <input
          type="password"
          onChange={setUserPass}
          placeholder="password"
          className="todoPass todoInput"
        ></input>
        <input
          type="submit"
          onClick={() => {
            fetch( //API로 php코드에 유저의 아이디와 비밀번호를 넘겨줌 
              `/API/login.php?id=${userId?.target.value}&pass=${userPass?.target.value}`
              )
              .then((response) => response.json()) // 그 결과를 json으로 바꿔줌
              .then((data) => setUserInfo(data)); // 바꿔준 내용을 data라는 이름의 변수로 받아서 setUserInfo레 전해줌 Redux로 이 data를 넘겨줄 예정
              //.then(history.push("/Main")); 메인 페이지로 이동하는 함수 하지만 유저의 정보를 전달해주지 못해 못사용함
            }}
            className="sub todoInput"
            />
            </section>
        </>
    );
};

export default Login;