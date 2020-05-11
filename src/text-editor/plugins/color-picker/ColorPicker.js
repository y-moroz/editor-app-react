import React, { useContext, useEffect, useState } from 'react';
import { GithubPicker } from 'react-color';
import { FaPalette } from 'react-icons/fa';
import './ColorPicker.css';
import { EditorSelectionContext } from '../../TextEditor';
import useConstant from 'use-constant';
import TextFormatService from '../../shared/text-format.service';
import { ForeColor, StyleWithCSS } from '../../constants/editor-commands';

function ColorPicker() {
  const [opened, setOpened] = useState(false);
  const [color, setColor] = useState(null);
  const editorSelectionContext = useContext(EditorSelectionContext);

  const selectionChangeListener = useConstant(() => () => setColor(TextFormatService.queryCommandValue(ForeColor)));

  useEffect(
    () => editorSelectionContext.registerSelectionChangeListener(selectionChangeListener),
    [editorSelectionContext, selectionChangeListener]
  );

  const onColorSelected = (color) => {
    TextFormatService.execCommand(StyleWithCSS, true);
    TextFormatService.execCommand(ForeColor, color.hex);
    TextFormatService.execCommand(StyleWithCSS, false);
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
