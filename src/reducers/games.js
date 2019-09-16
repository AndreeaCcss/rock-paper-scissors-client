import { SET_GAMES } from '../actions/games'

export default function games(state = [], action = {}) {
  switch (action.type) {
    case SET_GAMES:
      return action.payload
    default:
      return state
  }
}