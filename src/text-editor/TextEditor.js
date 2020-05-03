import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import ControlPanel from './components/control-panel/ControlPanel';
import FileZone from './components/file-zone/FileZone';

function TextEditor(props) {
  return (
    <Fragment>
      <ControlPanel groups={props.groupedPlugins}/>
      <FileZone>{props.children}</FileZone>
    </Fragment>
  );
}

TextEditor.propTypes = {
  groupedPlugins: PropTypes.object
};

export default TextEditor;
