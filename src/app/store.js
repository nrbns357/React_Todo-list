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
    value: inputText,
  };
};


export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    delId:   todoId,
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
        todos: [
          ...state.todos,
          {
            
          }         
          ],
      };
    }
    case REMOVE_TODO: { 
      return { //삭제는 웹 페이지 에서만 잠깐 안보이고 서버에서는 삭제가 일어나지 않음 서버에서 삭제를 하기 위해서 content를 추가했을 때 userNumber가 있어야 함  
        ...state,
        todos: state.todos.filter(todo => todo.index !== action.id)
      };
    }
    
    default:
      return state;
  }
};

export const store = createStore(reducer);

export default store;
