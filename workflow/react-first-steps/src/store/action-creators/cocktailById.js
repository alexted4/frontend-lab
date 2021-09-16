import { config } from '../api-config'
import { 
  COCKTAIL_BY_ID_FAILURE, 
  COCKTAIL_BY_ID_SUCCESS, 
  COCKTAIL_BY_ID_STARTED 
} from '../types'

const axios = require('axios')

export const fetchCocktailById = (query) => {
    return (dispatch, getState) => {
        dispatch(cocktailByIdStarted())
        const token = getState().authenticate.token
        if (token){
            axios
                .get(`${config.API_URL}/cocktails/lookup?i=${query}`,{
                    headers: { Authorization: `Bearer ${token}` }
                })
                .then(res => {
                dispatch(cocktailByIdSuccess(res.data))
                })
                .catch(err => {
                dispatch(cocktailByIdFailure(err.message))
                })
        } else {
            dispatch(cocktailByIdFailure('Error! Unauthorized'))
        }
    }
}

const cocktailByIdSuccess = data => ({
    type: COCKTAIL_BY_ID_SUCCESS,
    payload: {
      ...data
    }
  })
  
  const cocktailByIdStarted = () => ({
    type: COCKTAIL_BY_ID_STARTED
  })
  
  const cocktailByIdFailure = error => ({
    type: COCKTAIL_BY_ID_FAILURE,
    payload: {
      error
    }
  })