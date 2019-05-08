import { UPDATE_SCORE, CLEAR_ROWS, PAUSE_GAME, GAME_OVER, INCREMENT_SCORE, INCREMENT_TIMER, UPDATE_BOARD, START_GAME, RESET_GAME, MOVE_LEFT, MOVE_RIGHT, MOVE_DOWN, ROTATE, NEW_PIECE } from '../constants';
import {randomBlock} from '../lib/blockTypes'

export const incrementScore = () => {
  return {type: INCREMENT_SCORE};
}

export const incrementTimer = () => {
  return {type: INCREMENT_TIMER};
}

export const updateBoard = board => {
  return {type: UPDATE_BOARD, board};
}

export const startGame = () => {
  return {type: START_GAME};
}

export const resetGame = () => {
  return {type: RESET_GAME};
}

export const moveLeft = (game) => {
  const { currentPiece, board, pos } = game;
  if (pos[0] > 0 && !board[pos[1]][pos[0]-1]) {
    currentPiece.forEach((b,i) => {
      b.forEach((s,j) => {
        board[i+pos[1]][j+pos[0]-1] = s;
      })
      
    })
    pos[0] = pos[0] - 1;
  }
  return {type: MOVE_LEFT, payload: {board, pos}};
}

export const moveRight = (game) => {
  const { currentPiece, board, pos } = game;
  if (pos[0] < board[0].length) {
    currentPiece.forEach((b,i) => {
      if (b[0] && !board[pos[1]+i][pos[0]+1]) {
        b.forEach((s,j) => {
          board[i+pos[1]][j+pos[0]+1] = s;
        })
      }
    })
    pos[0] = pos[0] + 1;
  }
  return {type: MOVE_RIGHT, payload: {board, pos}};
}

export const moveDown = (game) => {
  const { currentPiece, board, pos } = game;
  if (pos[1] < board.length - 1 && !board[pos[1]+1][pos[0]]) {
    currentPiece.forEach((b,i) => {
      b.forEach((s,j) => {
        board[i+pos[1]][j+pos[0]] = s;
      })
      if (pos[1] && !i) b.forEach((s,k) => board[i+pos[1]-1][k+pos[0]] = 0)
    })
  }
  return {type: MOVE_DOWN, payload: {board, pos: [pos[0], pos[1]+1]}};
}

export const rotateBlock = (game) => {
  const { currentPiece, board, pos } = game;
  currentPiece.forEach((b,i) => {
    b.forEach((s,j) => {
      let temp = board[i][j];
      
    })
  })
  return {type: ROTATE, board};
}

export const newPiece = board => {
  if (board[0][4] === 1) return { type: GAME_OVER }
  else {
    const currentPiece = randomBlock();
    const pos = [4, 0]
    currentPiece[currentPiece.length-1].forEach((s,i) => {
      board[pos[1]][pos[0]+i] = s;
    })
    return {type: NEW_PIECE, payload: {board, currentPiece, pos}};
  }
}

export const clearRows = game => {
  const { board, score } = game;
  board.forEach(row => {
    let isComplete = row.every(cell => cell);
    if (isComplete) {
      let newScore = score + 100;
      row.forEach(cell => cell = 0);
    }
  })
  return {type: UPDATE_SCORE, payload: {board, score}};
}

export const pauseGame = () => {
  return {type: PAUSE_GAME};
}