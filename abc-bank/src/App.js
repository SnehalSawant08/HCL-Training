import React from 'react';
import './App.css';

import Routing from './Routing'
import {BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h2 className="text-white"> Welcome to ABC Bank</h2>
      <Router> <Routing/></Router>
     
    
    </div>
  );
}

export default App;
