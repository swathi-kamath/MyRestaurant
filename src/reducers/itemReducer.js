import * as actionType from '../actions/ActionTypes';
const initialstate = {
  itemCount: 0,
  items: []
}

const itemReducer = (state = initialstate, action) => {
  
  switch (action.type) {
    case actionType.ADD_ITEM:{

      return {

        itemCount: state.itemCount+1 ,

        items: [ ...state.items,action.payload]

      }

    }
    
    return { 
      ...state,
      items: state.items.push([action.payload]),
      itemCount:state.itemCount+1
   }

    return state;
    case actionType.REMOVE_ITEM:
    state.itemCount=state.itemCount+1;
    return state;
    default:
      return state;
  }
}
export default itemReducer;
