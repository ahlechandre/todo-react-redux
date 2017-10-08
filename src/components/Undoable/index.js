import React from 'react';
import PropTypes from 'prop-types';

const Undoable = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <div>
    <button type="button" onClick={onUndo} disabled={!canUndo}>Undo</button>
    <button type="button" onClick={onRedo} disabled={!canRedo}>Redo</button>
  </div>
);

Undoable.PropTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
};

export default Undoable;
