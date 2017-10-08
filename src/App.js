import React from 'react';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import UndoableContainer from './containers/UndoableContainer';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoableContainer />
  </div>
);

export default App;
