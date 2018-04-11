import * as actionType from '../actions/ActionTypes';
import Cookies from 'js-cookie';
import data from '../data/reviews.json';

let initialState={
  reviews: []
}

data['reviews'].map(function (review, index){
    initialState.reviews= [...initialState.reviews, review]
});
if(Cookies.get('restReview')){
    initialState.reviews= [...initialState.reviews, Cookies.get('activeUser')]
}
const reviewReducer = (state = initialState, action) => {
    let newState;    
  switch (action.type) {
    case actionType.ADD_REVIEW:
    Cookies.set('restReview',action.payload);
    newState = {
        reviews: [...state.reviews, action.payload]
      }
    break;
    case actionType.REMOVE_REVIEW:
    Cookies.remove('restReview');
    newState = {
        itemCount: state.itemCount + 1,
        items: [...state.items, action.payload]
    }
    default:
    newState = state;
    break;
  }
  return newState;
}

export default reviewReducer;