import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import './SimpleAction.css';
import useConstant from 'use-constant';
import { EditorSelectionContext } from '../../TextEditor';

function SimpleAction(props) {
  const [isActive, setIsActive] = useState(document.queryCommandState(props.command));
  const Icon = props.icon;
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setIsActive(document.queryCommandState(props.command)));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    []
  );

  return (
    <button
      type="button"
      className={classNames({
        'action-button': true,
        'action-button--active': isActive
      })}
      onClick={() => document.execCommand(props.command)}
    >
      <Icon className="action-button__icon"/>
    </button>
  );
}

SimpleAction.propTypes = {
  command: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired
};

export default SimpleAction;
