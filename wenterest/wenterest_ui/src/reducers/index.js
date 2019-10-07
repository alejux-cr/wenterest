import { combineReducers } from 'redux';
import specialists from './specialists'
import errors from './errors'
import messages from './messages'

export default combineReducers({
    specialists,
    errors,
    messages
})