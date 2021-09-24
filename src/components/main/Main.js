import React, { useEffect, useState} from 'react';
import Content from './todo-content';
import './Main.css';



const TodoList = () => {
  
  const [value, setValue] = useState("");
  const [toDos, setToDos] = useState([]);

  const [userId,setUserId] = useState("");
  const [userPass,setUserPass] = useState("");
  
    const onChange = (event) => {
        const {target : {value}} = event;
        setValue(value);
    }

    useEffect(()=>{
      console.log(toDos);
    }, [toDos])

    const onSubmit = (event) => {
      event.preventDefault();
      setToDos([...toDos, value])
      fetch(`/API/add.php?text=${value}`);
    }

    // const fetchData = ()=>{
    //   fetch(`/API/inquiry.php`)
    //   .then((response) => response.json())
    //   .then((data) => setToDos(data));
    // }

    // fetchData();
    
    return (
      <div className="App">
          <div className="main">
                <input type="text" onChange={setUserId}  placeholder="id" className="id input"></input>
                <input type="password" onChange={setUserPass} placeholder="password" className="pass input"></input>
                <input type="submit" onClick={()=>{
                    fetch(`/API/login.php?id=${userId?.target.value}&pass=${userPass?.target.value}`)
                      .then((response) => response.json())
                      .then((data) => setToDos(data));
                }} className="sub"/>
        </div>
        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>

          <main className="box">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>

            <div className="containar">
            <div className="form">
                <h2>Todo List</h2>

                    <form className="inputBox">
                        <input className="text" name="text" type="text" value={value} onChange={onChange} placeholder="What are we going to do today?"></input>
                        <input type="submit" value="submit" onClick={onSubmit}></input>
                    </form>
                      <Content textArray={toDos}/>
            </div>
            </div>
          </main>
        </section>
        
      </div>
    )
}

export default TodoList;