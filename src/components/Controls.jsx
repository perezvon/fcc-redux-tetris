import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Controls = ({moveLeft, moveRight}) => (
  <div>
    <button className='button' onClick={moveLeft}>Left</button>
    <button className='button' onClick={moveRight}>Right</button>
  </div>
)

export default connect(null, actions)(Controls)