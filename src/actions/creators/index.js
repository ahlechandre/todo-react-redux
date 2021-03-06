import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../types';

export const addTodo = (text) => (
  {
    type: ADD_TODO,
    text,
  }
);

export const toggleTodo = (id) => (
  {
    type: TOGGLE_TODO,
    id,
  }
);

export const setVisibilityFilter = (filter) => (
  {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
);
