import PropTypes from 'prop-types';
import React, { createContext, useEffect, useRef } from 'react';
import ControlPanel from './components/control-panel/ControlPanel';
import FileZone from './components/file-zone/FileZone';
import useConstant from 'use-constant';

export const EditorSelectionContext = createContext({
  registerSelectionChangeListener: () => {}
});

const selectionListeners = new Set();

const registerSelectionChangeListener = listener => {
  selectionListeners.add(listener);
  return () => selectionListeners.delete(listener);
};

function TextEditor(props) {
  const fileZoneRefContainer = useRef(null);
  const editorSelectionContextValue = useConstant(() => ({
    registerSelectionChangeListener
  }));

  const selectionChangeListener = event => {
    let selection = document.getSelection();
    if (selection && fileZoneRefContainer.current && fileZoneRefContainer.current.contains(selection.anchorNode)) {
      for (let listener of selectionListeners) {
        listener(event, selection)
      }
    }
  };

  useEffect(
    () => {
      document.addEventListener('selectionchange', selectionChangeListener);
      return () => document.removeEventListener('selectionchange', selectionChangeListener);
    },
    []
  );

  return (
    <EditorSelectionContext.Provider value={editorSelectionContextValue}>
      <ControlPanel groups={props.groupedPlugins}/>
      <FileZone ref={fileZoneRefContainer}>{props.children}</FileZone>
    </EditorSelectionContext.Provider>
  );
}

TextEditor.propTypes = {
  groupedPlugins: PropTypes.object
};

export default TextEditor;
