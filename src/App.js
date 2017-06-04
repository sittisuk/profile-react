import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    imageURL: ""
  }
  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
    .then(res => res.json())
    .then(json => json.data.image_url)
    .then((imageURL) => {
      this.setState({
        imageURL: imageURL
      })
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Sittisuk</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={this.state.imageURL} alt="git file"/>
      </div>
    );
  }
}

export default App;
