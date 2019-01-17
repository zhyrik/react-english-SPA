
import { ADD_ITEM, ADD_TITLE_OBJ, DELETE_ITEMS } from './actionTipes'
import axios from 'axios'

export function addItems (item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function deleteItems () {
  return {
    type: DELETE_ITEMS
  }
}

export function addTitleObj (item) {
  return {
    type: ADD_TITLE_OBJ,
    item
  }
}

export function sentCategory () {
  return async (dispatch, getState) => {
    console.log(getState().add)
    await axios.post('https://react-english.firebaseio.com/category.json', getState().add)

    dispatch(deleteItems())
    dispatch(addTitleObj({}))
  }
}