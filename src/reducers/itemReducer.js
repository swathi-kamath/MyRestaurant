import * as actionType from '../actions/ActionTypes';
const initialstate={
 itemCount:0,
 items :[]
}
    
const itemReducer = (state = initialstate, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_ITEM:
      return newState = state+ action.payload;
    default:
      return state
  }
}

export default itemReducer;
    