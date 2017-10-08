import { ADD_TODO, TOGGLE_TODO } from '../actions/types';

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

const todosReducer = (prevState = [], action) => (
  action.type === ADD_TODO ? 
    addTodoReducer(prevState, action.text) : 
    (
      action.type === TOGGLE_TODO ?
      toggleTodoReducer(prevState, action.id) :
      prevState
    )
);

export default todosReducer;
