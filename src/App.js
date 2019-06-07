import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    const count = this.state.counter;
    this.setState({
      counter : count + 1
    })
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The count is {this.state.counter}</h1>
        <button data-test="increment-button" onClick={this.incrementCounter}>Increment counter</button>
      </div>
    );
  }
}

export default App;
