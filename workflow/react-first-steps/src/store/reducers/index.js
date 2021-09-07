import { combineReducers } from 'redux'
import fetchRandomCocktail from './fetchRandomCocktailReducer'

const reducers = combineReducers({
    fetchRandomCocktail: fetchRandomCocktail
})

export default reducers