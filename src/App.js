import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


import Greet from './components/Greet'
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Greet name="Aaftab"/> */}
        <Message />
      </div>
    );
  }
}

export default App;
