import React from 'react';
import './FileZone.css';

function FileZone(props) {
  return (
    <div id="file-zone">
      <div id="file" contentEditable={true} suppressContentEditableWarning>
        {props.children}
      </div>
    </div>
  );
}

export default FileZone;
