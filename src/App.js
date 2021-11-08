import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <h1>Certification Form</h1>
      <FormPage/>
    </div>
  );
}

export default App;
