/**
 * Created by whistle ting on 2016/3/30.
 */
import {ADD_TODO} from '../actions/index';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                }
            ];
        default:
            return state
    }
}

export default todos;
