/**
 * Created by whistle ting on 2016/4/1.
 */
import React from 'react'
export default class Hello extends React.Component{
    componentDidMount () {
        console.log('mount');
    }
    componentWillUnmount () {
        console.log('un mount');
    }
    render () {
        return (
            <h3>hello, INI</h3>
        );
    }
}