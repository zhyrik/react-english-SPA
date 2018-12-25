import {GET_ARRAY_WORDS} from './actionTipes'

export function getArrayWords (item) {
  return {
    type: GET_ARRAY_WORDS,
    item
  }
}