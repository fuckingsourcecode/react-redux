/**
 * Created by whistle ting on 2016/3/29.
 */
import {ADD_ULITEM, REMOVE_ULITEM} from '../constants/ActionType';
const initialState = [{
    text:'Use Redux',
    completed:false,
    id:0,
}];
export default function operate(state=initialState, action){
    switch (action.type){
        case ADD_ULITEM:
            return [
                {
                    id:state.reduce((maxId, operate)=>Max.max(operate.id, maxId), -1) + 1,
                    completed:false,
                    text:'1',
                }
            ]
        case REMOVE_ULITEM:
            return state.filter(operate=>
            operate.id!=action.id);
        default:
            return state;
    }
}