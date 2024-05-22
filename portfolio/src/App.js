import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/about';
import Contact from './routes/contact';
import Project from './routes/project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/project" element={<Project/>}/>
      </Routes>
    </Router>
  );
}

export default App;