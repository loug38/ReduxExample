import * as types from './types';

export function changeButtonColor(newColor) 
{
    return {
        type: types.CHANGE_BUTTON_COLOR,
        payload: newColor
    }
}