import React, { useContext, useEffect, useState } from 'react';
import { GithubPicker } from 'react-color';
import { FaPalette } from 'react-icons/fa';
import './ColorPicker.css';
import { EditorSelectionContext } from '../../TextEditor';
import useConstant from 'use-constant';

function ColorPicker() {
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState(null);
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setColor(document.queryCommandValue('foreColor')));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    []
  );

  const onColorSelected = (color) => {
    document.execCommand('styleWithCSS', true);
    document.execCommand('foreColor', true, color.hex);
    document.execCommand('styleWithCSS', false);
    setOpened(false);
  }
  return (
    <div className="color-picker">
      <button
        type="button"
        className="color-picker__button"
        onClick={() => setOpened(!opened)}
      >
        <FaPalette color={color}/>
      </button>
      {opened && (
        <div className="color-picker__content" onMouseDown={e => e.preventDefault()}>
          <GithubPicker onChangeComplete={onColorSelected}/>
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
