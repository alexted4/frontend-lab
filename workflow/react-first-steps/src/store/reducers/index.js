import { combineReducers } from 'redux';
import randomCocktail from './fetchRandomCocktailReducer';
import auth from './authenticationReducer';
import searchCocktails from './searchCocktailsReducer';
import cocktailById from './cocktailByIdReducer';

const reducers = combineReducers({
    randomCocktail,
    auth,
    searchCocktails,
    cocktailById,
});

export default reducers;
