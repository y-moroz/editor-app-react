import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import './SimpleAction.css';
import useConstant from 'use-constant';
import { EditorSelectionContext } from '../../TextEditor';
import TextFormatService from '../../shared/text-format.service';

function SimpleAction(props) {
  const [isActive, setIsActive] = useState(TextFormatService.queryCommandState(props.command));
  const Icon = props.icon;
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setIsActive(TextFormatService.queryCommandState(props.command)));

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
      onClick={() => TextFormatService.execCommand(props.command)}
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
