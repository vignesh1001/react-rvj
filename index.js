import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';

class RootApp extends Component {
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

render(<RootApp />, document.getElementById('root'));
