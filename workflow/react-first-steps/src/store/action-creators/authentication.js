import { config } from '../api-config'
import { 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE, 
  AUTHENTICATE_STARTED, 
  ADD_USERNAME 
} from '../types'

const axios = require('axios')

const authenticateStarted = () => ({
  type: AUTHENTICATE_STARTED
})

const addUsername = data => ({
  type: ADD_USERNAME,
  payload: {
    data
  }
})

export const login = (data) => {
    return dispatch =>{
        dispatch(authenticateStarted())
        axios
          .post(`${config.API_URL}/sign-in`, data)
          .then(res => {
            dispatch(addUsername(data.name))
            document.cookie = `username=${data.name};`
            document.cookie = `token=${res.data.token};`
            dispatch(loginSuccess(res.data));
          })
          .catch(err => {
            dispatch(loginFailure(err.message));
          })
    }
}

const loginSuccess = data => ({
    type: LOGIN_SUCCESS,
    payload: {
      ...data
    }
  })
    
  const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: {
      error
    }
  })

  export const register = (data) => {
    return dispatch =>{
        dispatch(authenticateStarted())
        axios
          .post(`${config.API_URL}/sign-up`, data)
          .then(res => {
            dispatch(addUsername(data.name))
            document.cookie = `username=${data.name};`
            document.cookie = `token=${res.data.token};`
            dispatch(registerSuccess(res.data));
          })
          .catch(err => {
            dispatch(registerFailure(err.message));
          })
    }
}

const registerSuccess = data => ({
    type: REGISTER_SUCCESS,
    payload: {
      ...data
    }
  })
    
  const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: {
      error
    }
  })