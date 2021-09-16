import { combineReducers } from 'redux'
import fetchRandomCocktail from './fetchRandomCocktailReducer'
import authenticate from './authenticationReducer'
import searchCocktails from './searchCocktailsReducer'
import fetchCocktailById from './cocktailByIdReducer'

const reducers = combineReducers({
    fetchRandomCocktail,
    authenticate,
    searchCocktails,
    fetchCocktailById
})

export default reducers