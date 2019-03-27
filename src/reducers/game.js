
import { INCREMENT_SCORE, INCREMENT_TIMER, UPDATE_BOARD, START_GAME, RESET_GAME, MOVE_LEFT, MOVE_RIGHT,ROTATE } from '../constants';
import defaultBoard from '../lib/defaultBoard'
export default function(state = {score: 0, timer: 0, board: defaultBoard, pos: 4, playing: false}, action) {
  switch (action.type) {
    case INCREMENT_SCORE: 
      return {...state, score: state.score + 1};
    case INCREMENT_TIMER: 
      return {...state, timer: state.timer + 1};
    case UPDATE_BOARD: 
      return {...state, board: action.board}
    case START_GAME:
      return {...state, playing: true}
    case RESET_GAME: 
      return {...state, score: 0, timer: 0, board: [], playing: false};
    case MOVE_LEFT: 
      return { ...state, pos: state.pos - 1 }
    case MOVE_RIGHT:
      return { ...state, pos: state.pos + 1 }
    case ROTATE:
      return { ...state, rotation: state.rotation + 1 }
    default: 
      return state;
  }
}