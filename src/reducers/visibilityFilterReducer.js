import { SET_VISIBILITY_FILTER, FILTERS } from '../actions/types';

const { SHOW_ALL } = FILTERS;

const visibilityFilterReducer = (prevState = SHOW_ALL, action) => (
  action.type === SET_VISIBILITY_FILTER ? action.filter : prevState
);

export default visibilityFilterReducer;
