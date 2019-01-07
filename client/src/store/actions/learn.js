import {GET_ARRAY_WORDS, LEARN_FLAG} from './actionTipes'

export function getArrayWords (item) {
  return {
    type: GET_ARRAY_WORDS,
    item
  }
}

export function changeFlag (item) {
  return {
    type: LEARN_FLAG,
    item
  }
}