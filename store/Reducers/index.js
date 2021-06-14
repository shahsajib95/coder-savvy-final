import { combineReducers } from 'redux';
import blogReducer from '../blog/reducer';

export default combineReducers({
    blogs: blogReducer
}) 