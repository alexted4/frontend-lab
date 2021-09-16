import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_STARTED,
} from '../types';

const initialState = {
	loading: true,
	error: null,
	cocktail: {},
};

export default function randomCocktail(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				cocktail: action.payload,
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
}
