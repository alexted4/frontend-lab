import { config } from '../api-config'

const axios = require('axios')

export const fetchRandomCocktail = () => {
    return dispatch => {
        dispatch(fetchRCStarted());
        
        axios
          .get(`${config.API_URL}/cocktails/random`, {
            completed: false
          })
          .then(res => {
            dispatch(fetchRCSuccess(res.data));
          })
          .catch(err => {
            dispatch(fetchRCFailure(err.message));
          })
      }
}

const fetchRCSuccess = data => ({
    type: config.FETCH_DATA_SUCCESS,
    payload: {
      ...data
    }
  })
  
  const fetchRCStarted = () => ({
    type: config.FETCH_DATA_STARTED
  })
  
  const fetchRCFailure = error => ({
    type: config.FETCH_DATA_FAILURE,
    payload: {
      error
    }
  })