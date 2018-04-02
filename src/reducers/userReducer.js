import * as actionType from '../actions/ActionTypes';
const initialState={
  activeUser:"",
}
    
const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_ACTIVE_USER:
    return {
      ...state,
      activeUser: action.payload
    };
    case actionType.REMOVE_ACTIVE_USER:
    return {
      ...state,
      activeUser: ""
    };
    default:
      return state
  }
}

export default userReducer;