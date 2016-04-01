import React, { Component, PropTypes } from 'react';
import Todo from '../Todo/index';

export default class TodoList extends Component {
  render() {

      if(this.props.todos){
          return (
              <ul>
                  {
                      this.props.todos.map((todo, index) =>
                          <Todo
                              {...todo}
                              key={index}
                          />
                      )
                  }
              </ul>

          );
      }else {
          return <div>no result</div>;
      }
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired
};