import undoable, { distinctState } from 'redux-undo';
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

const appTodo = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer,
});

const appTodoReducer = undoable(appTodo, {
  filter: distinctState(),
});


export default appTodoReducer;
