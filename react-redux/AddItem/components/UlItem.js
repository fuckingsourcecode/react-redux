/**
 * Created by whistle ting on 2016/3/29.
 */
import React, {Component, PropTypes} from 'react';
export default class UlItem extends Component{
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((item, i)=>{
                        <li key={i}>{item.num}</li>
                    })}
                </ul>
            </div>
        )
    }
}
UlItem.PropTypes = {
    items:PropTypes.array.isRequired,
}