import React from 'react';
import "./todo-content.css";


const Content = ({textArray}) => {


        return(
        <div>
            {textArray.map(text => <div className="content">
            {text.content}
            <img alt="closeImg" src="/img/close.png" className="delbtn" onClick={() =>{
                    fetch(`/API /del.php?id=${text.indexId}`);
                }
            }></img>
            </div>)}
        </div>
        )
}
 
export default Content;