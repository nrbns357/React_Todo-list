import React from 'react';
import { useSelector } from 'react-redux';
import Img from '../asset/img/close.png';
import "./todo-content.css";


const Content = () => {
        const userState = useSelector(state => state); // store를 불러와서 그걸 state에 넣어주고 state.user을 써서 state안에 user정보를 변수에 저장
        console.log(userState)
        const UserDataAdd = () =>
        {
             userState.map((text)=> 
            <div className="content">
            {text.Content}
            <img alt="closeImg" src={Img} className="delbtn"
             onClick={() =>{
                    fetch(`/API /del.php?id=${text.indexId}`);}} />
            </div>)
        }
        return(
        <div>
            <UserDataAdd/>            

        </div>
        )
}
 
export default Content;