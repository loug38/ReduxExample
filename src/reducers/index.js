import { combineReducers } from 'redux';
import * as MyReducers from './myReducers';

export default rootReducer = combineReducers(Object.assign(
    MyReducers,
    // Any additional files with Reducers
));