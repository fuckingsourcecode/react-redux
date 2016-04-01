/**
 * Created by whistle ting on 2016/3/29.
 */
export const ADD_ULITEM = 'ADD_ULITEM';
export const REMOVE_ULITEM = 'REMOVE_ITEM';
export function add(index){
    return {
        type:ADD_ULITEM,
        index:index
    }
}
export function remove(){
    return {
        type:REMOVE_ULITEM,
    }
}