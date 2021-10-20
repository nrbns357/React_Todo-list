import {  createStore } from "redux";

const REGIST = "Regist";
const ADD_TODO = "add_todo";
const REMOVE_TODO = "remove_todo";

export const registTodo = (dataArray) => {
  return {
    type: REGIST,
    data: dataArray,
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
    delId: todoId,
  };
};

const initialState = {
  user: null,
  todos: [],
};

let increaseIndexId = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIST: {
      
      return {
        ...state,
        user: action.data,
        todos: action.data.map((item) => {
          return {
            content: item.content,
            index: item.indexKey
          }
        })
      };
    }
    case ADD_TODO: {
      // immer
      return {
        ...state, // 이것을 써주는 이유는 push하면 기존에 있던 값들이 날라감 기존에 있던값을 같이 리턴 해주는 것이야.
        todos: [
          ...state.todos,
          {
            //todos라는 배열 안에 state.todos 이라는 배열 (초기에는 빈값을) 을 넣어준다.
            content: action.value, // [removeTodo]
            index: increaseIndexId++,
          },
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
