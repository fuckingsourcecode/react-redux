import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
class App extends Component{
	render(){
		const {dispatch, todos} = this.props;
		return (
			<div>
				<AddTodo addTodo={text=>dispatch(addTodo(text))} />
				<TodoList todos={todos}/>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		todos:state.todos
	}
}
export default connect(mapStateToProps)(App);