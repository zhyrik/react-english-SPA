
import {ADD_ITEM} from './actionTipes'

export function addItems (item) {
  return {
    type: ADD_ITEM,
    item
  }
}