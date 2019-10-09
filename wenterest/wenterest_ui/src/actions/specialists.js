import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_SPECIALISTS, DELETE_SPECIALIST, ADD_SPECIALIST } from './types';


export const addSpecialist = (specialist) => (dispatch, getState) => {
    axios
        .post('/api/specialists/', specialist, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ specialistAdded: 'Specialist Added!' }));
            dispatch({
                type: ADD_SPECIALIST,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getSpecialists = () => (dispatch, getState) => {
    axios
        .get('/api/specialists/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPECIALISTS,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteSpecialist = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/specialists/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ specialistDeleted: 'Specialist deleted!' }));
            dispatch({
                type: DELETE_SPECIALIST,
                payload: id
            })
        }).catch(err => console.log(err));
}