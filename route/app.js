import React from 'react'
import {Link} from  'react-router'
export default class Index extends React.Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/hello">hello</Link></li>
                    <li><Link to="/world">world</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}