import PropTypes from 'prop-types';
import React from 'react';

function ControlPanelActionGroup(props) {
  const renderedPlugins = props.plugins.map((plugin, i) => {
    const TagName = plugin.component;
    return <TagName {...plugin.props} key={i}/>;
  });
  return (
    <div className="control-panel-actions">
      {renderedPlugins}
    </div>
  );
}

ControlPanelActionGroup.propTypes = {
  plugins: PropTypes.array
};

ControlPanelActionGroup.defaultProps = {
  plugins: []
};

export default ControlPanelActionGroup;
