const execCommand = (command, value) => {
  const range = getCurrentRangePosition();
  const result = document.execCommand(command, false, value);
  setNewRangePosition(range);
  return result;
}

const queryCommandState = command => {
  return document.queryCommandState(command);
}

const queryCommandValue = command => {
  return document.queryCommandValue(command);
}

const setNewRangePosition = range => {
  if (range) {
    const selection = document.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

const getCurrentRangePosition = () => {
  const selection = document.getSelection();
  if (selection && selection.type === 'Caret' && selection.getRangeAt && selection.rangeCount) {
    return selection.getRangeAt(0);
  }
  return null;
}

export default {
  execCommand,
  queryCommandState,
  queryCommandValue
};
