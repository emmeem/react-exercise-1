import React, { Component } from 'react';
import './Avatar.css';
import imgURL from '../assets/avatar.jpg';

class Avatar extends Component {
  render() {
    return (
      <div className = "Avatar" style = {{textAlign: 'center'}}>
        <img src={imgURL} alt='Avator'/>
      </div>
    );
  }
}

export default Avatar;