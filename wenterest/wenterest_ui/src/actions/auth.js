import axios from "axios";
import { returnErrors } from "./messages";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from "./types";

// CHECK THE TOKEN & LOAD USER
export const loadUser = () => (dipatch, getState) => {
    //User loading
    dipatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => {
            dipatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dipatch(returnErrors(err.response.data, err.response.status));
            dipatch({ type: AUTH_ERROR });
        });
}

// LOGIN USER
export const login = (username, password) => dipatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ username, password });

    axios
        .post('/api/auth/login', body, config)
        .then(res => {
            dipatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dipatch(returnErrors(err.response.data, err.response.status));
            dipatch({ type: LOGIN_FAILED });
        });
}
// REGISTER USER
export const register = ({ email, username, password }) => dipatch => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request body
    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then(res => {
            dipatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dipatch(returnErrors(err.response.data, err.response.status));
            dipatch({ type: REGISTER_FAILED });
        });
}
// LOGOUT USER
export const logout = () => (dipatch, getState) => {

    axios
        .post('/api/auth/logout/', null, tokenConfig(getState))
        .then(res => {
            dipatch({
                type: LOGOUT_SUCCESS
            });
        })
        .catch(err => {
            dipatch(returnErrors(err.response.data, err.response.status));
        });
}


// Setup config with token - helper func

export const tokenConfig = getState => {
    //Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}