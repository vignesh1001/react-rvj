import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (<App />);
  }
}

render(<App />, document.getElementById('root'));
