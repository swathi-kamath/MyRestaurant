import * as actionType from '../actions/ActionTypes';
import Cookies from 'js-cookie';

let initialState={
  activeUser:  ""
}
if(Cookies.get('activeUser')){
  initialState.activeUser=Cookies.get('activeUser');
}else{
  initialState.activeUser="";
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ACTIVE_USER:
    Cookies.set('activeUser',action.payload);
    return {
      ...state,
      activeUser: action.payload
    };
    case actionType.REMOVE_ACTIVE_USER:
    Cookies.remove('activeUser');
    return {
      ...state,
      activeUser: ""
    };
    default:
      return state
  }
}

export default userReducer;