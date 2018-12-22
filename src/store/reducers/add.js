import {ADD_ITEM} from '../actions/actionTipes'
const initialState = {
  items: []
}

export default function addReducer (state = initialState, action) {

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      }
    default:
      return state
  }
}