import React from 'react';
import Img from '../../asset/img/close.png';
import "./todo-content.css";


const Content = ({textArray}) => {


        return(
        <div>
            {textArray.map(text => <div className="content">
            {text.content}
            <img alt="closeImg" src={Img} className="delbtn" onClick={() =>{
                    fetch(`/API /del.php?id=${text.indexId}`);
                }
            }></img>
            </div>)}
        </div>
        )
}
 
export default Content;