import { combineReducers } from 'redux'
import fetchRandomCocktail from './fetchRandomCocktailReducer'
import authenticate from './authenticationReducer'

const reducers = combineReducers({
    fetchRandomCocktail,
    authenticate
})

export default reducers