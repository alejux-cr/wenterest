import { combineReducers } from 'redux';
import specialists from './specialists'
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
    specialists,
    errors,
    messages,
    auth
})