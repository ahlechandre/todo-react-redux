import { connect } from 'react-redux';
import { FILTERS, toggleTodo } from '../../actions';
import TodoList from '../../components/TodoList';

const { SHOW_ACTIVE, SHOW_COMPLETED } = FILTERS;

const getVisibleTodos = (todos, filter) => (
  filter === SHOW_COMPLETED ?
    todos.filter(todo => todo.completed) : 
    (
      filter === SHOW_ACTIVE ?
        todos.filter(todo => !todo.completed) :
        todos
    )  
);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => (
    dispatch(toggleTodo(id))
  ),
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,  
)(TodoList);

export default VisibleTodoList;
