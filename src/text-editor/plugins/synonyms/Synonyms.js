import React, { useEffect, useLayoutEffect, useRef } from 'react';
import useConstant from 'use-constant';
import { useSearchSynonyms } from './hooks';
import './Synonyms.css';
import { replaceSelectedText } from '../../shared/selection-helpers';

function Synonyms() {
  const {synonyms, setText} = useSearchSynonyms();
  const listRefContainer = useRef(null);

  const selectionChangeListener = useConstant(() => () => {
    const selection = document.getSelection();
    if (selection) {
      setText(selection.toString());
    }
  });

  useEffect(
    () => {
      document.addEventListener('selectionchange', selectionChangeListener);
      return () => document.removeEventListener('selectionchange', selectionChangeListener);
    },
    []
  );

  useLayoutEffect(
    () => {
      const selection = document.getSelection();
      if (selection && selection.rangeCount > 0 && listRefContainer.current) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        listRefContainer.current.style.top = `${rect.top + rect.height + 2}px`;
        listRefContainer.current.style.left = `${rect.left - 4}px`;
      }
    },
    [synonyms.result]
  );

  if (synonyms.result && synonyms.result.length) {
    return (
      <div className="synonyms" ref={listRefContainer}>
        <div className="synonyms__title">Select word to replace:</div>

        <ul className="synonyms-list">
          {synonyms.result.map(({word}) => (
            <li key={word}>
              <button
                type="button"
                className="synonyms-list__button"
                onClick={() => replaceSelectedText(word)}
              >{word}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default Synonyms;

