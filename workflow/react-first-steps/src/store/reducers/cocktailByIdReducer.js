import { 
    COCKTAIL_BY_ID_FAILURE, 
    COCKTAIL_BY_ID_SUCCESS, 
    COCKTAIL_BY_ID_STARTED 
  } from '../types'
  
  const initialState = {
    loading: false,
    error: null,
    cocktail: {}
  }
  
  export default function fetchCocktailById(state = initialState, action) {
      switch (action.type) {
        case COCKTAIL_BY_ID_STARTED:
          return {
            ...state,
            loading: true
          };
        case COCKTAIL_BY_ID_SUCCESS:
          return {
            ...state,
            loading: false,
            error: null,
            cocktail: action.payload
          };
        case COCKTAIL_BY_ID_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error
          };
        default:
          return state;
      }
  }