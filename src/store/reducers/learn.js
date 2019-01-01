import { GET_ARRAY_WORDS, LEARN_FLAG} from '../actions/actionTipes'

const initialState = {
  arrayWords: [],
  learnFlag: true
}

export default function learnReducer (state = initialState, action) {

  switch (action.type) {
    case GET_ARRAY_WORDS:
      return {
        ...state,
        arrayWords: action.item
      }
    case LEARN_FLAG:
      return{
        ...state,
        learnFlag: action.item
      }
    default: 
      return state
  }

}