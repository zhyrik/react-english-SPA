import {AUTH_SUCCES, AUTO_LOGOUT} from '../actions/actionTipes'
const initialState = {
  token: null,
  email: '',
  pasword: ''
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCES:
      return {
        ...state,
        token: action.token
      }
    case AUTO_LOGOUT:
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}