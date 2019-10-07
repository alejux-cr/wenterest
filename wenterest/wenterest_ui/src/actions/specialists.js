import axios from 'axios';
import { createMessage } from './messages';

import { GET_SPECIALISTS, DELETE_SPECIALIST, ADD_SPECIALIST, GET_ERRORS } from './types';


export const addSpecialist = (specialist) => dispatch => {
    axios.post('/api/specialists/', specialist)
        .then(res => {
            dispatch(createMessage({ specialistAdded: 'Specialist Added!' }));
            dispatch({
                type: ADD_SPECIALIST,
                payload: res.data
            })
        }).catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors
            })
        });
}

export const getSpecialists = () => dispatch => {
    axios.get('/api/specialists/')
        .then(res => {
            dispatch({
                type: GET_SPECIALISTS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

export const deleteSpecialist = (id) => dispatch => {
    axios.delete(`/api/specialists/${id}/`)
        .then(res => {
            dispatch(createMessage({ specialistDeleted: 'Specialist deleted!' }));
            dispatch({
                type: DELETE_SPECIALIST,
                payload: id
            })
        }).catch(err => console.log(err));
}