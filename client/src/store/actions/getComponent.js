import { GET_CATEGORY } from './actionTipes'
import axios from 'axios'

export function createCategoris (item) {
  return {
    type: GET_CATEGORY,
    item
  }
}

export function getCategory () {
  return async (dispatch) => {

    const GetCategory = await axios.get('https://react-english.firebaseio.com/category.json')
    dispatch(createCategoris(GetCategory))

  }
}

