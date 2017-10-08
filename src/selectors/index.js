import { FILTERS } from '../actions/types';
import { createSelector } from 'reselect';

const { SHOW_ACTIVE, SHOW_COMPLETED } = FILTERS;
const visibleTodosTransform = (todos, filter) => {
  switch (filter) {
    case SHOW_ACTIVE:
    return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
default:
      return todos;
  }
};

export const visibleTodosSelector = createSelector(
  [
    state => state.todos,
    state => state.visibilityFilter,
  ],
  visibleTodosTransform
);
