import axios, { AxiosError } from 'axios';

const SET_USERS_DATA = 'SET_AUTH_DATA'

const initialState = {
    username: null,
    password: null,
    isAuth: false
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (username, password, isAuth) => ({ type: SET_USERS_DATA, payload: { username, password, isAuth } });

export const logIn = (username, password) => async (dispatch) => {

    let response = await axios.post('https://fakestoreapi.com/auth/login', { username, password })
    if (response.data.token) {
        dispatch(setAuthUserData(username, password, true))
    }
}