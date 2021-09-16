import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE, 
    AUTHENTICATE_STARTED, 
    ADD_USERNAME,
    CLEAR_ERROR,
    INIT_STATE 
} from '../types'

const initialState = {
    error: null,
    user: {},
    loading: false
}

export default function authenticate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
            ...state,
            loading: false,
            error: null,
            token: action.payload.token
            }
        case LOGIN_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload.error,
            }
        case REGISTER_SUCCESS:
            return {
            ...state,
            loading: false,
            error: null,
            user: action.payload
            }
        case REGISTER_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.payload.error
            }
        case AUTHENTICATE_STARTED:
            return {
            ...state,
            loading: true
            }
        case ADD_USERNAME:
            return {
            ...state,
            username: action.payload.data
            }
        case CLEAR_ERROR:
            return {
            ...state,
            error: null
            }
        case INIT_STATE:
            return {
            ...state,
            token: action.payload.token,
            username: action.payload.username
            }
        default:
            return state
        }
}