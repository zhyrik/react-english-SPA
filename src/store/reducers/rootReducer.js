import { combineReducers } from 'redux'
import addReducer from './add'
import getComponent from './getComponent'
import auth from './auth'
import learn from './learn'

export default combineReducers ({
  add: addReducer,
  getComponent,
  auth,
  learn
})