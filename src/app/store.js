import {  createStore } from "redux";

const LOGIN = "login";
const ADD_TODO = "add_todo";
const REMOVE_TODO = "remove_todo";

export const LoginTodo = (userNum) => {
  return {
    type: LOGIN,
    data: userNum,
  };
};

export const ShowContent = (inputText) => {
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
    case LOGIN: 
      return {
        ...state,
        userNumber: action.data
      }    
      
    case ADD_TODO: {
      console.log(action)
      // immer
      return {
        ...state, 
        todos:[
          ...state.todos,
          ...action.index
        ]
      };
    }
    case REMOVE_TODO: { 
      return { //content의 indexKey가 있어야함 그래야지 지우려고 하는 content를 지움  
        ...state,
        todos: state.todos.filter(todo => todo.indexKey !== action.delId)
      };
    }
    
    default:
      return state;
  }
};

export const store = createStore(reducer);

export default store;
