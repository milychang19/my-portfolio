import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <header className='test'>
        <h1>Welcome </h1>
      </header>
      <Home />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
