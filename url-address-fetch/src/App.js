import React, { Component } from 'react';
import './App.css';
var {newSerialURL} = require('./URLArrayToCSV')

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="newSerialURLDisplay">
          <newSerialURL />
        </div>
      </div>
    );
  }
}

export default App;
