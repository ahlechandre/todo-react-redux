import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, FILTERS } from '../actions';

const { SHOW_ALL } = FILTERS;

/**
 * Reducer compositions.
 */

const addTodoReducer = (todos, text) => ([
  ...todos,
  {
    id: (todos.length + 1),
    text,
    completed: false,
  }
]);

const toggleTodoReducer = (todos, id) => (
  todos.map(todo => (
    id === todo.id ? ({
      ...todo,
      completed: !todo.completed,
    }) : todo
  ))
);

const visibilityFilter = (prevState = SHOW_ALL, action) => (
  action.type === SET_VISIBILITY_FILTER ? action.filter : prevState
);

const todos = (prevState = [], action) => (
  action.type === ADD_TODO ? 
    addTodoReducer(prevState, action.text) : 
    (
      action.type === TOGGLE_TODO ?
      toggleTodoReducer(prevState, action.id) :
      prevState
    )
);

const appTodo = combineReducers({
  visibilityFilter,
  todos,
});

export default appTodo;
