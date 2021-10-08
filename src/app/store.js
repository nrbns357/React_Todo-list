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
  user: [],
  todos: [],
};

let increaseIndexId = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGIST: {
      return {
        ...state,
        user: action.data,
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
            text: action.value, // [removeTodo]
            indexId: increaseIndexId++,
          },
        ],
      };
    }
    case REMOVE_TODO: {
      //제거 하는 부분
      //Array.prototype.filter() // 사용해서 제거하기
      return console.log(action.delId);
    }
    default:
      return state;
  }
};

export const store = createStore(reducer);

export default store;
