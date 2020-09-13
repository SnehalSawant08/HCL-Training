import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routing from'./Routing';




function App(props) {
  return (
    <div className="App">
      <h2 className="text-white"> Welcome to ABC Bank</h2>
      <Router > <Routing/></Router>
     
      
     
    
    </div>
  );
}

export default App;
