import { config } from '../api-config';
import { SEARCH_FAILURE, SEARCH_SUCCESS, SEARCH_STARTED } from '../types';

const axios = require('axios');

export const searchCocktails = (queryName, query) => {
    return (dispatch, getState) => {
        dispatch(searchStarted());
        const token = getState().auth.token;
        if (token) {
            axios
                .get(`${config.API_URL}/cocktails/search?${queryName}=${query}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(res => {
                    dispatch(searchSuccess(res.data));
                })
                .catch(err => {
                    dispatch(searchFailure(err.message));
                });
        } else {
            dispatch(searchFailure('Error! Unauthorized'));
        }
    };
};

const searchSuccess = data => ({
    type: SEARCH_SUCCESS,
    payload: {
        ...data,
    },
});

const searchStarted = () => ({
    type: SEARCH_STARTED,
});

const searchFailure = error => ({
    type: SEARCH_FAILURE,
    payload: {
        error,
    },
});
