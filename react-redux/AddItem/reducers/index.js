/**
 * Created by whistle ting on 2016/3/29.
 */
import {combinReducers} from 'redux';
import {UlOperate} from './UlOperate';
const rootReducer = combinReducers({
    UlOperate,
})
export default rootReducer;