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
    case actionType.INCREMENT_ITEM:{
      const updatedItems = state.items.map(item => { 
        if(item.foodid === action.payload){ 
        return { ...item,count:item.count+1};
        } 
        return item;
        }) ;        
      return{
        itemCount: state.itemCount+1,
        items:updatedItems
      }
    }
    case actionType.DECREMENT_ITEM:{
      const updatedItems = state.items.map(item => { 
        if(item.foodid === action.payload){ 
        return { ...item,count:item.count-1};
        } 
        return item;
        }) ;        
      return{
        itemCount: state.itemCount-1,
        items:updatedItems
      }
    }
    case actionType.REMOVE_ITEM:{
      let itemCurrentCount;
      const updatedItems = state.items.map(item => { 
        if(item.foodid === action.payload){ 
          itemCurrentCount = item.count;
        return {};
        } 
        return item;
        }) ;        
      return{
        itemCount: state.itemCount-itemCurrentCount,
        items:updatedItems
      }
    }
  
    return state;
    default:
      return state;
  }
}
export default itemReducer;
