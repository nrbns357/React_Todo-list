import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../app/store";
import Img from "../asset/img/close.png";
import "./todo-content.css";

const Content = () => {
  const state = useSelector((state) => state); // store를 불러와서 그걸 state에 넣어주고 state.user을 써서 state안에 user정보를 변수에 저장
  const { todos} = state;
  const dispatch = useDispatch();
  
render()
  return (
    <div>
      {todos && // {&&}가 무엇이냐 하면 비교연산자 todos가 참이면 실행
        todos.map(
          (
            value
          ) => (
              <div className="content" key={value.index}>
              {value.content}
              <img
                alt="closeImg"
                src={Img}
                className="delbtn"
                onClick={() => {
                    fetch(`/API/del.php?id=${value.indexKey}`).then((response) => // 삭제 기능은 정상작동됨
                    response.status === 200 ? dispatch(removeTodo(value.indexKey)) : false
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
