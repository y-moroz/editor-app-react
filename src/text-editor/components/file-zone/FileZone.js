import React from 'react';
import './FileZone.css';

function FileZone(props) {
  return (
    <div id="file-zone">
      <div id="file" contentEditable={true}>
        {props.children}
      </div>
    </div>
  );
}

export default FileZone;
