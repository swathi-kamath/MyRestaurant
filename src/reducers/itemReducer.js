import * as actionType from '../actions/ActionTypes';

    
const itemReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_ITEM:
      return newState = state+ action.payload;
    default:
      return state
  }
}

export default itemReducer;
    