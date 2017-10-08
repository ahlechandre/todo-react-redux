import { createStore } from 'redux';
import todoAppReducer from '../reducers';

// Store state shape.
// {
//   past: [],
//   present: [
//     {
//       visibilityFilter: 'SHOW_ALL',
//       todos: [
//         { id: 1, text: 'Todo 1', completed: false },
//       ],
//     },
//   ],
//   future: [],
// }

let store = createStore(todoAppReducer);

export default store;
