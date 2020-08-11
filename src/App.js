import React, { Component } from 'react';
import './App.scss';
import Avatar from './components/Avatar';
import Welcome from './components/Welcome';
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar />
        <Welcome />
        <Profile />
      </div>
    );
  }
}

export default App;
