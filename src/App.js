import React, { Component } from 'react';
import './App.css';

import Game from './components/Game'

class App extends Component {
  
 render() {
   return (
     <div className='container'>
       <h1>Redux Tetris</h1>
       <Game />
     </div>
   )
 } 
}

export default App;
