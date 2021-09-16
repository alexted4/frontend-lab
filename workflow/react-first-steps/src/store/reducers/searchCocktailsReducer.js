import { SEARCH_FAILURE, SEARCH_SUCCESS, SEARCH_STARTED } from '../types';

const initialState = {
	loading: false,
	error: null,
	searchResult: {},
};

export default function searchCocktails(state = initialState, action) {
	switch (action.type) {
		case SEARCH_STARTED:
			return {
				...state,
				loading: true,
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				searchResult: action.payload,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
}
