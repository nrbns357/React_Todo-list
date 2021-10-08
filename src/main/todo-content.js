import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeTodo } from "../app/store";
import Img from "../asset/img/close.png";
import "./todo-content.css";

const Content = () => {
  const history = useHistory();
  const state = useSelector((state) => state); // store를 불러와서 그걸 state에 넣어주고 state.user을 써서 state안에 user정보를 변수에 저장
  const { user, todos } = state;
  const dispatch = useDispatch();

  // 로그인을 하고 Main페이지에서 새로고침 했을 때 로그인된 user의 정보가 안보여진다.
  // 그래서  로컬 스토리지에 저장을 해서  
  useEffect(() => {
      localStorage.setItem("user",'');
      console.log(user); // 확인을 해보면 콘솔에 찍힘 하지만 user의 배열은 비어있음
     if(!user){
        history.push('/Main');
    }
  }, [user,history]);

  useEffect(()=>{
      
  })

  return (
    <div>
      {todos && // {&&}가 무엇이냐 하면 비교연산자 todos가 참이면 실행
        todos.map(
          (
            value
          ) => (
            <div className="content">
              {value.text}
              <img
                alt="closeImg"
                src={Img}
                className="delbtn"
                onClick={() => {
                  fetch(`/API/del.php?id=${value.indexId}`).then((response) =>
                    response.status === 200 ? dispatch(removeTodo(user)) : false
                  ); //삼항 연산자를 이용해서 dispatch로 값을 날려 주어야 한다 // 서버에 제거하라는 명령은 가지만 렌더링이 안되서 서버에서만 지워지고 웹페이지 에서는 지워진게 보이지 않는다.(렌더링 하기)
                }}
              />
            </div>
          )
        )}
    </div>
  );
};

export default Content;
