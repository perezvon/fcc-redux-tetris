
import { UPDATE_SCORE, CLEAR_ROWS, PAUSE_GAME, GAME_OVER, INCREMENT_SCORE, INCREMENT_TIMER, UPDATE_BOARD, START_GAME, RESET_GAME, MOVE_LEFT, MOVE_RIGHT, MOVE_DOWN, ROTATE, NEW_PIECE } from '../constants';
import Board from '../lib/defaultBoard'
const defaultState = {score: 0, timer: 0, board: new Board().default(), pos: [4,0], status: 'new'}

export default function(state = defaultState, action) {
  
  switch (action.type) {
    case INCREMENT_SCORE: 
      return {...state, score: state.score + 1};
    case INCREMENT_TIMER: 
      return {...state, timer: state.timer + 1};
    case UPDATE_BOARD: 
      return {...state, board: action.board}
    case START_GAME:
      return {...state, status: 'playing'}
    case RESET_GAME: 
      return { defaultState };
    case MOVE_LEFT: 
    case MOVE_RIGHT:
    case MOVE_DOWN:
    case ROTATE:
    case NEW_PIECE:
    case CLEAR_ROWS:
    case UPDATE_SCORE:
      return { ...state, ...action.payload}
    case PAUSE_GAME:
      return { ...state, status: 'paused' }
    case GAME_OVER: 
      return { ...state, status: 'over' }
    default: 
      return state;
  }
}