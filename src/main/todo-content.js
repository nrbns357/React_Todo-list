import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Img from '../asset/img/close.png';
import "./todo-content.css";


const Content = () => {
        const history = useHistory()
        const state = useSelector(state => state); // store를 불러와서 그걸 state에 넣어주고 state.user을 써서 state안에 user정보를 변수에 저장
        const {user, todos} = state;

        useEffect(()=> {
            // Main페이지에서 새로고침 했을 때
            if (!user) {
                history.replace('/') // replace 첫 번째 값과 바꾼다.
            }
        }, [history, user])

        return(
        <div>
            {todos &&  todos.map((text)=> // {&&}가 무엇이냐 하면 비교연산자 todos가 참이면 실행
            <>
                <div className="content">
                {text.text}
                <img alt="closeImg" src={Img} className="delbtn"
                onClick={() =>{
                        fetch(`/API/del.php?id=${text.indexId}`)
                        .then((response) => console.log(response.status === 200)); // 서버에 제거하라는 명령은 가지만 렌더링이 안되서 서버에서만 지워지고 웹페이지 에서는 지워진게 보이지 않는다.(렌더링 하기ㅣ
                }} />
                </div> 
            </>
            ) }                       
        </div>
        )
}
 
export default Content;