const replaceSelectedText = text => {
  const selection = document.getSelection();
  if (selection.rangeCount) {
    // keep accidentally selected space after the word
    if (/.+?\s+$/.test(selection.toString())) {
      selection.extend(selection.focusNode, selection.focusOffset - 1);
    }

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
    selection.collapseToEnd();
  }
}

export {
  replaceSelectedText
}
