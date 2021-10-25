import {  createStore } from "redux";

const REGIST = "Regist";
const ADD_TODO = "add_todo";
const REMOVE_TODO = "remove_todo";

export const registTodo = (userNum) => {
  return {
    type: REGIST,
    data: userNum,
  };
};

export const addTodo = (inputText) => {
  //액션생성 함수
  return {
    type: ADD_TODO,
    index: inputText,
  };
};


export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    delId: todoId,
  };
};


const initialState = {
  userNumber: '',
  todos: [],
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIST: 
      return {
        ...state,
        userNumber: action.data,
      }    
      
    case ADD_TODO: {
      // immer
      return {
        ...state, 
        todos: action.index.map((item)=>{ //!!!!!!!!!!!!!!!!!!!!!!!!!! 이 코드는 함수가 아니다 그러니 실행이 안된다
          return{
            indexkey: item.indexKey,
            content: item.content
          }
        })
      };
    }
    case REMOVE_TODO: { 
      return { //content의 indexKey가 있어야함 그래야지 지우려고 하는 content를 지움  
        ...state,
        todos: state.todos.filter(todo => todo.indexKey !== action.id)
      };
    }
    
    default:
      return state;
  }
};

export const store = createStore(reducer);

export default store;
