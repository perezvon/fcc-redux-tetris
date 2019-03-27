import React from 'react';

const blockStyle = {
  width: '25px',
  height: '25px',
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'transparent',
  display: 'inline-block'
}

class Block extends React.Component {
  render() {
    return (
      <div style={{...blockStyle, ...this.props.styles}}></div>
    )
  }
}

export default Block;