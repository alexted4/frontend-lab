import { config } from '../api-config';
import {
	FETCH_DATA_FAILURE,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_STARTED,
} from '../types';

const axios = require('axios');

export const fetchRandomCocktail = () => {
	return (dispatch) => {
		dispatch(fetchRandomCocktailStarted());

		axios
			.get(`${config.API_URL}/cocktails/random`)
			.then((res) => {
				dispatch(fetchRandomCocktailSuccess(res.data));
			})
			.catch((err) => {
				dispatch(fetchRandomCocktailFailure(err.message));
			});
	};
};

const fetchRandomCocktailSuccess = (data) => ({
	type: FETCH_DATA_SUCCESS,
	payload: {
		...data,
	},
});

const fetchRandomCocktailStarted = () => ({
	type: FETCH_DATA_STARTED,
});

const fetchRandomCocktailFailure = (error) => ({
	type: FETCH_DATA_FAILURE,
	payload: {
		error,
	},
});
