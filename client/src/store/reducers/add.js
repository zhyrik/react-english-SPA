import {ADD_ITEM, ADD_TITLE_OBJ, DELETE_ITEMS} from '../actions/actionTipes'
const initialState = {
  items: [],
  titleObj: {}
}

export default function addReducer (state = initialState, action) {

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      }
    case ADD_TITLE_OBJ:
      return {
        ...state,
        titleObj: action.item
      }
    case DELETE_ITEMS: 
      return {
        ...state,
        items: []
      }
    default:
      return state
  }
}