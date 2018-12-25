import { GET_ARRAY_WORDS} from '../actions/actionTipes'

const initialState = {
  arrayWords: []
}

export default function learnReducer (state = initialState, action) {

  switch (action.type) {
    case GET_ARRAY_WORDS:
      return {
        ...state,
        arrayWords: action.item
      }
    default: 
      return state
  }

}