import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { registTodo } from '../app/store';
import { useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';


const Login = () => {

    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    // const FatchPhp = () =>{
    // fetch( //API로 php코드에 유저의 아이디와 비밀번호를 넘겨줌 
    //           `/API/login.php?id=${userId?.target.value}&pass=${userPass?.target.value}`
    //           )
    //           .then((response) => response.json()) // 그 결과를 json으로 바꿔줌
    //           .then((data) =>dispatch(registTodo(data))) // 바꿔준 내용을 data라는 이름의 변수로 받아서 setUserInfo레 전해줌 Redux로 이 data를 넘겨줄 예정
    //           .then(() => history.push("/Main"));
    //               }


      const Examine = () =>{
        if(!userId||!userPass){
          return false
        }
        else {
          return true
        }
      }

      const sendUserData = async() =>{
          const url = `/API/login.php?id=${userId?.target.value}&pass=${userPass?.target.value}`
            try { 
              const data = await axios.get(url); // axios를 이용해서 get으로 url을 실행
              return data; // php에서 가져온 데이터를 리턴을 해준다.
            } catch (error) { // try를 하다가 error가 난다면 catch가 잡아준다.
              const data= error.response // error가 무엇인지 자세히 알려준다.
              return data; 
            }    
      }

      const onSubmit = async(e) =>{
        e.preventDefault(); 
        const inputPass = Examine(); //true and false 값을 받아서 오는 함수
        if(inputPass){ //true면 try실행 , flase면 return해서
        const res = await sendUserData(); // sendUserData();를 실행해서 return값을 res변수에 저장
        const {status, data} = res; // res변수에서 {status, data}만 뺀다. 
        dispatch(registTodo(data));
          if(status === 200){ // {status}가 200일떄 (200은 성공했다는 의미이다.) 
            history.push("/Main"); // 참이면 페이지 이동
            return;  
          }
        return; // true일때 alert창이 실행이 안되게 해준다.
        }
        window.alert("아이디와 비밀번호를 입력해주세요.");
      }

    return (
      <form class="todoform" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={setUserId}
          placeholder="id"
          className="todoId todoInput"
          />
        <input
          type="password"
          onChange={setUserPass}
          placeholder="password"
          className="todoPass todoInput"
          />
        <input
          type="submit"
            className="sub"
            value="submit"
            />
        </form>
    );
};

export default Login;