import React, { Component } from 'react';
import moment from "moment"

import PortfolioContainer from './Portfolio/portfolio-container'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Keith Slentz's Portfolio</h1>
        <PortfolioContainer />
        <div>{moment().format ("MMMM do YYYY, h:mm:ss a")} </div>
        
      </div>
    );
  }
}
