import { connect } from 'react-redux';
import Undoable from '../../components/Undoable';
import { ActionCreators } from 'redux-undo';

const mapStateToProps = state => ({
  canUndo: state.past.length,
  canRedo: state.future.length,
});
const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(ActionCreators.undo()),
  onRedo: () => dispatch(ActionCreators.redo()),
});

const UndoableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Undoable);

export default UndoableContainer;
