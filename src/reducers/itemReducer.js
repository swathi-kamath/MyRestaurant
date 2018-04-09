import * as actionType from '../actions/ActionTypes';
import Cookies from 'js-cookie';

const initialstate = {
  itemCount: 0,
  items: []
}
if (Cookies.get('items')) {
  console.log(Cookies.get('items'));
  initialstate.items = JSON.parse(Cookies.get('items'));
}
if (Cookies.get('itemCount')) {
  initialstate.itemCount = parseInt(Cookies.get('itemCount'));
}
const itemReducer = (state = initialstate, action) => {
  let newState;
  switch (action.type) {
    case actionType.ADD_ITEM:
      newState = {
        itemCount: state.itemCount + 1,
        items: [...state.items, action.payload]
      }
      break;
    case actionType.INCREMENT_ITEM: {
      const updatedItems = state.items.map(item => {
        if (item.foodid === action.payload) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      newState = {
        itemCount: state.itemCount + 1,
        items: updatedItems
      }
    }
      break;
    case actionType.DECREMENT_ITEM: {
      const updatedItems = state.items.map(item => {
        if (item.foodid === action.payload) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      newState = {
        itemCount: state.itemCount - 1,
        items: updatedItems
      }
    }
      break;
    case actionType.REMOVE_ITEM: {
      let itemCurrentCount;
      let dIndex;
      /* const updatedItems = state.items.map(item => { 
         if(item.foodid === action.payload){ 
           itemCurrentCount = item.count;
         return {};
         } 
         return item;
         }) ; */
      state.items.map((item, index) => {
        if (item.foodid === action.payload) {
          dIndex = index;
          itemCurrentCount = item.count;
        }
      });
      const updatedItems = [...state.items];
      updatedItems.splice(dIndex, 1);
      newState = {
        itemCount: state.itemCount - itemCurrentCount,
        items: updatedItems
      }
    }
      break;
    case actionType.CLEAR_CART:
      return {
        itemCount: 0,
        items: []
      }
    default:
      newState = state;
      break;
  }
  if (Cookies.get('items')) {
    Cookies.remove('items');
  }
  if (Cookies.get('itemCount')) {
    Cookies.remove('itemCount');
  }
  Cookies.set('items', JSON.stringify(newState.items));
  Cookies.set('itemCount', newState.itemCount);
  return newState;
}
export default itemReducer;
