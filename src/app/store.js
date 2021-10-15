import {createStore} from 'redux'


const REGIST = 'Regist'

export const registTodo = dataArray => {
  return {
    type: REGIST,
    data: dataArray
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
    case undefined:
      return alert('유저');
    default:
      return state
  }
}



export const store = createStore(reducer);


export default store;