import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './SimpleAction.css';

function SimpleAction(props) {
  const [isActive, setIsActive] = useState(document.queryCommandState(props.command));
  const Icon = props.icon;

  useEffect(
    () => {
      const listener = () => setIsActive(document.queryCommandState(props.command));
      document.addEventListener('selectionchange', listener);
      return () => document.removeEventListener('selectionchange', listener);
    },
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
