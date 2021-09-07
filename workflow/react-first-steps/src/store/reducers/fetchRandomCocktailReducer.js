import { config } from '../api-config'

const initialState = {
  loading: true,
  error: null,
  cocktail: {}
}

export default function fetchRandomCocktail(state = initialState, action) {
    switch (action.type) {
      case config.FETCH_DATA_STARTED:
        return {
          ...state,
          loading: true
        };
      case config.FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          cocktail: action.payload
        };
      case config.FETCH_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
}