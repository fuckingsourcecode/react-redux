/**
 * Created by whistle ting on 2016/3/29.
 */
import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UlItem from '../components/UlItem';
import ButtonItem from '../components/ButtonItem';
import * as OperateAction from '../actions/operate';
class App extends Component{
    const {dispatch} = this.props;
    render(){
        return (
            <div>
                <UlItem />
                <ButtonItem operate={()=>dispatch()} />
            </div>
        )
    }
}
App.propTypes = {
    operate:PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired,
}
function mapStateToProps(state){
    return {
        operate:state.operate,
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(OperateAction, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);