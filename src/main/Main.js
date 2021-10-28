import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ShowContent } from "../app/store";
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const number = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { userNumber } = number;
  localStorage.setItem("userNumber",userNumber);

  useEffect(() => {
    // 로그인하고 main페이지에 들어 왔을 때 처음에 실행됨
    fetch(`/API/content.php?userNumber=${userNumber}`)
      .then((result) => result.json())
      .then((res) => dispatch(ShowContent(res)));
  }, [history, userNumber, dispatch]); //이안에는 useEffect밖에서 가져온 함수,변수등을 사용한다.

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
    fetch(`/API/add.php?text=${value}&userNumber=${userNumber}`).then(() => {
      fetch(`/API/content.php?userNumber=${userNumber}`)
        .then((result) => result.json())
        .then((res) => dispatch(ShowContent(res)));
    }); // 추가할때 id가 userNumber값으로 나와야하는데 id가 0으로 나온다 (id를 확인하는 방범은 삭제 버튼을 누른뒤 네트워크에서 확인해라)
  };
  //const UserRefresh = localStorage.getItem('')//여기서 true false를 가져와서 useEffect로 페이지를 그대로 두거나 한다 .
  useEffect(() => {
    if (!userNumber) {
      history.push("/");
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
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
