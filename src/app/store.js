import {createStore} from 'redux'


const REGIST = 'Regist';
const ADD_TODO = 'add_todo';

export const registTodo = dataArray => {
  return {
    type: REGIST,
    data: dataArray
  }
}

export const AddTodo = inputText => { //액션생성 함수
  return{
    type: ADD_TODO,
    value: inputText 
  }
}


export const reducer = (state,action) =>
{
  switch (action.type) {
    case REGIST: {
      return {
        ...state,
        user: action.data
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.data]// 기존에 있던 state값 예를 들면 
      }
    }
    default:
      return state
  }
}



export const store = createStore(reducer);


export default store;