import React, { Component } from 'react';
import Header from './Components/Header.react';
import Dashboard from './pages/Dashboard.react';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App;
