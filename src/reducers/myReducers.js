import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const buttonColor = createReducer('red', {
    [types.CHANGE_BUTTON_COLOR](state, action) {
        return state = action.payload;
    }
});