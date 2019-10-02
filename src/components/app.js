import React, { Component } from 'react';
import moment from "moment"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Keith Slentz's Portfolio</h1>
        <div>{moment().format (mm/dd/yyyy) </div>
        
      </div>
    );
  }
}
