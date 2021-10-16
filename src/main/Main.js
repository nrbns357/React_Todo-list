import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../app/store";
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const state = useSelector(state => state);
  const { data } = state;
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
    // 문제점 5)  삭제 버튼을 누르면 서버에 ture값이 가긴 하지만 {console로도 나옴} 웹 페이지 상에는 안보임
    // 문제점 6)  빈 vlaue가 입력되면 빈 contnet가 나온다
    // 문제점 7)  main 페이지에서 새로고침을 하면 로그아웃이 되는데 그때 삭제 버튼을 누르면 user의 정보가 나오지 읺는다.
    event.preventDefault();
    // if(value===null){ // value가 비었을 때 함수 실행을 안되게 해야함 (나중에 구현)
    //   return;
    // }else{

    // }
    dispatch(addTodo(value)); // 디스패치로 새로 입력한 vlaue를 store에 보내준다.
    fetch(`/API/add.php?text=${value}&userId=${data}`) // user의 Number를 넘겨줘야함
    .then((response) => response.json());
  };

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
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
