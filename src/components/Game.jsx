import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'

import Controls from './Controls'
import Scoreboard from './Scoreboard'
import Block from './Block'

const mapStateToProps = state => {
  return {...state}
}

const StartGame = ({startGame}) => (
  <div className='start-game-modal'>
    <button className='button' onClick={startGame}>start</button>
    </div>
)

class Game extends React.Component {
  componentDidUpdate(prevProps) {
    let timer;
    if (this.props.game.playing !== prevProps.game.playing) {
      if (this.props.game.playing) {
        timer = setInterval(() => this.props.incrementTimer(), 1000)
        this.doStartGame()
      }
      else clearInterval(timer);
    }
  }
  
  doStartGame = () => {
    console.log('starting ye olde game')
    this.props.updateBoard()
  }
  
  render() {
    console.log(this.props)
    const { game, startGame } = this.props;
    const { score, board, playing } = game;
    const bgColor = '#b374db'
    return (
      <>
      <Scoreboard score={score} />
      <div className='game-board'>
        {board.map(row => <div className='board-row'>{row.map(block => block === 1 ? <Block styles={{background: bgColor, border: '1px solid white'}} /> : <Block />)}</div>)}
      </div>
      <Controls />
      {!playing && <StartGame startGame={startGame} />}
      </>
    )
  }
}

export default connect(mapStateToProps, actions)(Game);