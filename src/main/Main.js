import React, { useEffect, useState } from "react";
import Content from "./todo-content";
import "./Main.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [toDos, setToDos] = useState([]);


  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    setToDos([...toDos, value]);
    fetch(`/API/add.php?text=${value}`);
  };



  return (
    <div className="App">
      
        <div className="todocontent">
          <div className="box">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="containar">
              <div className="form">
                <h2>Todo List</h2>

                <form className="inputBox">
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
                    onClick={onSubmit}
                    />
                </form>
                <Content textArray={toDos} />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TodoList;
