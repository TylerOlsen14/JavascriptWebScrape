import React, { Component } from 'react';
import './App.css';
import myInterface from './URLArrayToCSV2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="newSerialURLDisplay">
          <myInterface />
        </div>
      </div>
    );
  }
}

export default App;
