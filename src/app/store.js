import { createStore } from '@reduxjs/toolkit';

const REGIST = 'Regist'

export const registTodo = dataArray => {
  return {
    type: REGIST,
    data: ' 1'//dataArray
  }
}


export const reducer = (state,action) =>
{
  switch (action.type) {
    case REGIST:
      return console.log(action.data);
    default:
      return state
  }
}


export const store = createStore(reducer);



export default store;