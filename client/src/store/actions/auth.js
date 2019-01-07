import {AUTH_SUCCES, AUTO_LOGOUT} from './actionTipes'
import axios from 'axios'

export function auth (email, password, isLogin) {
  return async (dispatch) => {
    const authData = {
      email, password,
      returnSecureToken: true
    }
    // registration url from firebase REST API & api-key
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAbDpYbI662UsdpyWWYEhchR-30BrQo0g8'
    if (isLogin) {
      // login url from firebase REST API & api-key
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAbDpYbI662UsdpyWWYEhchR-30BrQo0g8`
    }

    const response = await axios.post(url, authData)
    const data = response.data

    const inspirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('user', data.localId)
    localStorage.setItem('inspirationDate ', inspirationDate )

    dispatch(autoSuces(data.idToken))
    dispatch(autoLogout(data.expiresIn * 1000 ))
  }
}

export function autoSuces (token) {
  return {
    type: AUTH_SUCCES,
    token
  }
}

export function autoLogout (interval) {
  return dispatch => {
    setTimeout(() => {dispatch(logout())}, interval)
  }
}

export function logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('user')
  localStorage.removeItem('inspirationDate ')
  return {
    type: AUTO_LOGOUT,

  }
}