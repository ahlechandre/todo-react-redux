import { createStore } from 'redux';
import todoApp from '../reducers';

/**
 * Store state shape.
 * {
 *    visibilityFilter: 'SHOW_ALL',   
 *    todos: [
 *      {
 *        id: 1,
 *        text: 'Todo text 1',
 *        completed: true,
 *      },
 *      {
 *        id: 2,
 *        text: 'Todo text 2',
 *        completed: false,
 *      },
 *    ],
 * }
 */
let store = createStore(todoApp);

export default store;
