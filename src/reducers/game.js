
import { INCREMENT_SCORE, INCREMENT_TIMER, UPDATE_BOARD, START_GAME, RESET_GAME, MOVE_LEFT, MOVE_RIGHT, MOVE_DOWN, ROTATE, NEW_PIECE } from '../constants';
import defaultBoard from '../lib/defaultBoard'
export default function(state = {score: 0, timer: 0, board: defaultBoard, pos: [4,0], playing: false}, action) {
  let { board } = state;
  switch (action.type) {
    case INCREMENT_SCORE: 
      return {...state, score: state.score + 1};
    case INCREMENT_TIMER: 
      return {...state, timer: state.timer + 1};
    case UPDATE_BOARD: 
      return {...state, board: action.board}
    case START_GAME:
      board[state.pos[1]][state.pos[0]] = 1;
      return {...state, board, playing: true}
    case RESET_GAME: 
      return {...state, score: 0, timer: 0, board: [], playing: false};
    case MOVE_LEFT: 
      board[state.pos[1]][state.pos[0]-1] = 1;
      board[state.pos[1]][state.pos[0]] = 0;
      if (state.pos[1]) board[state.pos[1]-1][state.pos[0]] = 0;
      return { ...state, board, pos: [state.pos[0]-1, state.pos[1]] }
    case MOVE_RIGHT:
      board[state.pos[1]][state.pos[0] + 1] = 1;
      board[state.pos[1]][state.pos[0]] = 0;
      if (state.pos[1]) board[state.pos[1]-1][state.pos[0]] = 0;
      return { ...state, board, pos: [state.pos[0] + 1, state.pos[1]] }
    case MOVE_DOWN:
      board[state.pos[1] + 1][state.pos[0]] = 1;
      board[state.pos[1]][state.pos[0]] = 0;
      if (state.pos[1]) board[state.pos[1] - 1][state.pos[0]] = 0;
      return { ...state, board, pos: [state.pos[0], state.pos[1] + 1] }
    case ROTATE:
      return { ...state, rotation: state.rotation + 1 }
    case NEW_PIECE:
      board[0][4] = 1;
      return { ...state, board, pos: [4,0]}
    default: 
      return state;
  }
}