import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/creators';
import TodoList from '../../components/TodoList';
import { visibleTodosSelector } from '../../selectors';

const mapStateToProps = state => ({
  todos: visibleTodosSelector(state),
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
