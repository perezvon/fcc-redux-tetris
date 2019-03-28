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
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }
  
  componentDidUpdate(prevProps) {
    let timer;
    if (this.props.game.playing !== prevProps.game.playing) {
      if (this.props.game.playing) {
        timer = setInterval(() => {
          this.collisionCheck(this.props.game.pos);
          this.props.incrementTimer();
        }, 1000)
        this.doStartGame()
      }
      else clearInterval(timer);
    }
  }
  
  doStartGame = () => {
    console.log('starting ye olde game')
    // this.props.updateBoard()
  }
  
  handleKeypress = e => {
    e.preventDefault();
    const { pos, board } = this.props.game;
    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        // piecePos = [x, y - 1];
        this.props.rotateBlock();
        break;
      case 'a':
      case 'ArrowLeft':
        if (pos[0] > 0 && !board[pos[1]][pos[0]-1]) this.props.moveLeft()
        break;
      case 's':
      case 'ArrowDown':
        if (pos[1] < board.length - 1 && !board[pos[1]+1][pos[0]]) this.props.moveDown()
        break;
      case 'd':
      case 'ArrowRight':
        if (pos[0] < board[0].length - 1  && !board[pos[1]][pos[0]+1]) this.props.moveRight()
        break;
      default: break;
    }
  }
  
  collisionCheck = pos => {
    const { board } = this.props.game;
    if (pos[1]+1 < board.length && board[pos[1] + 1][pos[0]] === 0) {
      this.props.moveDown();
    } else {
      this.props.newPiece();
    }
  }
  
  render() {
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