import {GET_CATEGORY} from '../actions/actionTipes'
const initialState = {
  categoris: []
}

export default function getComponent (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        categoris: action.item.data
      }
    default:
      return state
  }
}