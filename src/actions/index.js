/**
 * Action types
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const FILTERS = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
};

/**
 * Action creators
 */
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
