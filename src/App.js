import React from 'react';
import AreaNotes from './components/AreaNotes/index.js';
import Buttons from './components/Buttons/index.js';
import HighlighContextProvider from './components/context/highlightContext.js';
import NoteFormContextProvider from './components/context/NoteFormContext.js';
import NoteListContextProvider from './components/context/NoteListContext.js';
import Header from './components/Header/index';
import Logo from './components/Logo/index.js';
import Notes from './components/Notes/index.js';

function App() {

  return (
    <NoteListContextProvider>
    <NoteFormContextProvider>
    <HighlighContextProvider>

      <Header>
        <Logo />
        <Buttons />
      </Header>
      <AreaNotes>
        <Notes />
      </AreaNotes>
    </HighlighContextProvider>
  </NoteFormContextProvider>
  </NoteListContextProvider>
  );
}

export default App;
