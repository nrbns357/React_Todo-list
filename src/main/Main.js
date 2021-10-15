import React, {  useState,dispatch } from "react";
import { AddTodo } from '../app/store';
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {
  const [value, setValue] = useState("");


  const onChange = (event) => {
    console.log(event)
    const {
      target: { value },
    } = event;
    setValue(value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(AddTodo(value)); // 디스패치로 새로 입력한 text를 store에 보내준다.
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
                {/* <Content /> */}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TodoList;
