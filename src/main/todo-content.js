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
  
  useEffect(() => { // 이 함수가 실행되는 부분은 로그인하고 이제 막 들어왔을 때.  또  main에서 새로고침을 했을 때
      //localStorage.setItem("userinfo",'user');   // Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다
      //console.log(todos); // 확인을 해보면 콘솔에 찍힘 하지만 user의 정보는 비어있음
    //  if(!user){
    //     history.push('/');
    // }
  }, [user,history,todos]);


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
                  fetch(`/API/del.php?id=${value.index}`).then((response) =>
                    response.status === 200 ? dispatch(removeTodo(value.index)) : false
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
