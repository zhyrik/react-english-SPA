
import {ADD_ITEM, ADD_TITLE_OBJ} from './actionTipes'

export function addItems (item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function addTitleObj (item) {
  return {
    type: ADD_TITLE_OBJ,
    item
  }
}