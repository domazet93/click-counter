import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      showAlert: false
    }
  }

  incrementCounter = () => {
    const count = this.state.counter;
    this.setState({
      counter : count + 1,
      showAlert: false,
    })
  }

  decrementCounter = () => {
    const counter = this.state.counter;
    if(!counter) {
      return this.setState({
        showAlert: true
      })
    }
    this.setState({
      counter: counter - 1
    })
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The count is {this.state.counter}</h1>
        <button data-test='decrement-button' onClick={this.decrementCounter}>Decrement counter</button>
        <button data-test="increment-button" onClick={this.incrementCounter}>Increment counter</button>
        { this.state.showAlert && <p data-test='alert-msg'>Counter can't go below!</p> }
      </div>
    );
  }
}

export default App;
