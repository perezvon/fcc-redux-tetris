import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions'

import Controls from './Controls'
import Scoreboard from './Scoreboard'
import Block from './Block'

const bgColors = ['#b374db', '#4ffff0', '#a856ff', '#ffad56', '#e0ff56']

const mapStateToProps = state => {
  return {...state}
}

const StartGame = ({startGame}) => (
  <div className='start-game-modal'>
    <h3>Welcome</h3>
    <button className='button' onClick={startGame}>start</button>
    </div>
)

class Game extends React.Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeypress);
  }
  
  componentDidUpdate(prevProps) {
    let timer;
    if (this.props.game.status !== prevProps.game.status) {
      if (this.props.game.status === 'playing') {
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
    this.props.newPiece(this.props.game.board)
  }
  
  handleKeypress = e => {
    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        e.preventDefault();
        this.props.rotateBlock(this.props.game);
        break;
      case 'a':
      case 'ArrowLeft':
        e.preventDefault();
        this.props.moveLeft(this.props.game)
        break;
      case 's':
      case 'ArrowDown':
        e.preventDefault();
        this.props.moveDown(this.props.game)
        break;
      case 'd':
      case 'ArrowRight':
        e.preventDefault();
        this.props.moveRight(this.props.game)
        break;
      default: break;
    }
  }
  
  collisionCheck = pos => {
    const { board, currentPiece } = this.props.game;
    if (pos[1] >= board.length - 1) return this.props.newPiece(board);
    if (currentPiece) {
      let doesCollide = currentPiece[currentPiece.length-1].some((b,i) => b && board[pos[1] + 1][pos[0]+i])
      if (!doesCollide) {
       this.props.moveDown(this.props.game);
      } else {
       this.props.newPiece(board);
      }
    }
  }
  
  render() {
    const { game, startGame } = this.props;
    const { score, board, status } = game;
    return (
      <>
        <Scoreboard score={score} />
        <div className='game-board'>
          {board.map(row => <div className='board-row'>{row.map(block => block === 1 ? <Block styles={{background: bgColors[Math.floor(Math.random()*bgColors.length)], border: '1px solid white'}} /> : <Block />)}</div>)}
        </div>
        <Controls />
        {(status  === 'new' || status === 'over') && <StartGame startGame={startGame} />}
      </>
    )
  }
}

export default connect(mapStateToProps, actions)(Game);