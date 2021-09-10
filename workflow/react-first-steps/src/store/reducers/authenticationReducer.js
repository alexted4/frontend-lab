import { 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE, 
    REGISTER_SUCCESS, 
    REGISTER_FAILURE, 
    AUTHENTICATE_STARTED, 
    ADD_USERNAME,
    CLEAR_ERROR 
} from '../types'

const initialState = {
    error: null,
    user: {},
    loading: false
}

let token = ''
let username = ''

if (document.cookie){
token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    .split('=')[1];
username = document.cookie
    .split('; ')
    .find(row => row.startsWith('username='))
    .split('=')[1];
}

if (token){
    initialState.user = {token: token}
    initialState.username = username
}


export default function authenticate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
            ...state,
            loading: false,
            error: null,
            user: action.payload
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
        default:
            return state
        }
}