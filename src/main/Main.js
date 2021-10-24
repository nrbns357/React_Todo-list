import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { addTodo } from "../app/store";
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {

  const [value, setValue] = useState("");
  const {userNumber} = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    fetch(`/API/content.php?userNumber=${userNumber}`)
    .then((result)=>result.json())
    .then(res=> dispatch(addTodo(res)));
  }, [history]);
  
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event) => {
    // 문제점 2)  value를 입력하고 제출을 하고 이전 페이지로 돌아 간 다음 어떤 아이디로든 로그인을 해도 입력했었던 contnent가 나옴
    // 문제점 5)  삭제 버튼을 누르면 서버에 ture값이 가긴 하지만 {console로도 나옴} 웹 페이지 상에는 안보임
    // 문제점 6)  빈 vlaue가 입력되면 빈 contnet가 나온다
    // 문제점 7)  main 페이지에서 새로고침을 하면 로그아웃이 되는데 그때 삭제 버튼을 누르면 user의 정보가 나오지 읺는다.
    // 문제점 8)  
    event.preventDefault();
    setValue("");
    fetch(`/API/add.php?text=${value}&userNumber=${userNumber}`)
    .then(()=>{
      fetch(`/API/content.php?userNumber=${userNumber}`)
      .then((result)=>result.json())
      .then(res=> dispatch(addTodo(res)));
    }); // 추가할때 id가 userNumber값으로 나와야하는데 id가 0으로 나온다 (id를 확인하는 방범은 삭제 버튼을 누른뒤 네트워크에서 확인해라)


    useEffect(() => {
      if(!userNumber) {
        history.push('/')
      }
    }, [history, userNumber]);

  return (
    <div className="App">
      <div className="todocontent">
        <div className="box">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
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
                <input type="submit" value="submit" />
              </form>
              <Content/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
