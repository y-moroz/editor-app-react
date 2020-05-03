import React from 'react';
import PropTypes from 'prop-types';

import './ControlPanel.css';
import ControlPanelActionGroup from '../control-panel-action-group/ControlPanelActionGroup';

function ControlPanel(props) {
  return (
    <div className="control-panel">
      {Object.keys(props.groups).map(groupId => (
        <div className="control-panel__group" key={groupId}>
          <ControlPanelActionGroup plugins={props.groups[groupId]}/>
        </div>
      ))}
    </div>
  );
}

ControlPanel.propTypes = {
  groups: PropTypes.object.isRequired
};

export default ControlPanel;
