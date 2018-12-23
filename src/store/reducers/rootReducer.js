import { combineReducers } from 'redux'
import addReducer from './add'
import getComponent from './getComponent'

export default combineReducers ({
  add: addReducer,
  getComponent
})