import React, { useEffect, useState } from 'react';
import './App.css';
import PLUGINS from './text-editor/plugins';
import { groupBy, isNil } from 'ramda';
import TextEditor from './text-editor/TextEditor';
import { getMockText } from './text.service';

const groupedPlugins = groupBy(
  plugin => String(!isNil(plugin.groupId) ? plugin.groupId : 0),
  PLUGINS
);

function App() {
  const [text, setText] = useState('');

  useEffect(() => {getMockText().then(text => setText(text))}, []);

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <TextEditor groupedPlugins={groupedPlugins}>{text}</TextEditor>
      </main>
    </div>
  );
}

export default App;
