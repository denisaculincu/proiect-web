import React, { Component } from 'react';
import './App.css';
import {DivDateLoc} from './div_date';
import {Menu} from './menu';

import {MyMapComponent} from './maps'

class App extends Component {
  render() {
    return (
      <div>
      
        <div id="map">
         <MyMapComponent/>
        </div>
      
        <DivDateLoc />
  
        <Menu />
      </div>
    );
  }
}

export default App;
