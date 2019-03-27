import { INCREMENT_SCORE, INCREMENT_TIMER, UPDATE_BOARD, START_GAME, RESET_GAME, MOVE_LEFT, MOVE_RIGHT, ROTATE } from '../constants';

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

export const moveLeft = () => {
  return {type: MOVE_LEFT};
}

export const moveRight = () => {
  return {type: MOVE_RIGHT};
}

export const rotateBlock = () => {
  return {type: ROTATE};
}