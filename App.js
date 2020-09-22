import React, { Component } from 'react';
import Sample from './Sample';

class App extends Component {
  render() {
    return (
      <div>
        <a href='https://www.iplt20.com/'>
          <img src='images/l.jpg' />
        </a>

        <h1 className=''>INDIAN PREMIER LEAGUE</h1>
        <p>Select your teams</p>
        <Sample />
      </div>
    );
  }
}
export default App;
