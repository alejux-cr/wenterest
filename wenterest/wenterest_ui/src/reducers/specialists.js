import { GET_SPECIALISTS, DELETE_SPECIALIST, ADD_SPECIALIST } from '../actions/types.js';

const initialState = {
    specialists: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SPECIALIST:
            return {
                ...state,
                specialists: [...state.specialists, action.payload]
            };
        case GET_SPECIALISTS:
            return {
                ...state,
                specialists: action.payload
            };
        case DELETE_SPECIALIST:
            return {
                ...state,
                specialists: state.specialists.filter(specialist => specialist.id !== action.payload)
            };
        default:
            return state;
    }
}