import React from 'react';
import './app.css';

import Home from './components/home/Home';
import Index from './components/index/index';
import Page42 from './components/page42/Page42';
import Page64 from './components/page64/Page64';
import Page82 from './components/page82/Page82';
import Page94 from './components/page94/Page94';
import Page110 from './components/page110/Page110';
import Page125 from './components/page125/Page125';

function App() {
  return (
    <div className="App">
      <Home />
      <Index />
      <Page42 />
      <Page64 />
      <Page82 />
      <Page94 />
      <Page110 />
      <Page125 />
    </div>
  );
}

export default App;
