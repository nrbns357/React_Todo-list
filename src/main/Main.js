import React, {  useState} from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from '../app/store';
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {

  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };


  const onSubmit = (event) => {  
    // 문제점 1)  value를 입력했을 때 서버를 통해 데이터 베이스 (contnet)에 저장을 해야함. 
    // 문제점 2)  value를 입력하고 제출을 하고 이전 페이지로 돌아 간 다음 어떤 아이디로든 로그인을 해도 입력했었던 contnent가 나옴
    // 문제점 3)  user의 contnent가 안나옴
    // 문제점 4)  로그인을 하고 이전 페이지로 돌아가고 다시 다른 아이디로 로그인을 하면 유저 정보가 안나옴 새로고침을 하고 다시 로그인을 해야 user의 정보가 나옴
    // 문제점 5)  삭제 버튼을 누르면 서버에 ture값이 가긴 하지만 {console로도 나옴} 웹 페이지 상에는 안보임
        event.preventDefault();
    // if(value===null){ // value가 비었을 때 함수 실행을 안되게 해야함 (나중에 구현)
    //   return;
    // }else{

    // }
      dispatch(addTodo(value)); // 디스패치로 새로 입력한 text를 store에 보내준다.
    console.log(value); 
    fetch(`/API/add.php?text=${value}`);
    
    
  };

  // const userDataBring = ()=>{
  //   const Bring = toDos.map( res => );
  // }

  return (
    <div className="App">
      
        <div className="todocontent">
          <div className="box">
            <div className="square"/>
            <div className="square"/>
            <div className="square"/>
            <div className="square"/>

            <div className="containar">
              <div className="form">
                <h2>Todo List</h2>

                <form className="inputBox" onSubmit={onSubmit}>
                  <input
                    className="text"
                    name="text"
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="What are we going to do today?"
                    />
                  <input
                    type="submit"
                    value="submit"
                    />
                </form>
                <Content />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TodoList;
