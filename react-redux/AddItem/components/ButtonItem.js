/**
 * Created by whistle ting on 2016/3/29.
 */
import React, {Component} from 'react';
class ButtonItem extends Component{
    render(){
        <div>
            <button onClick={e=>this.Add(e)}>
                AddItem
            </button>
            <button onClick={e=>this.Remove(e)}>
                RemoveItem
            </button>
        </div>
    }
    Add(){
        
    }
    Remove(){
        
    }
}
export default ButtonItem;