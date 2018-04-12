import * as actionType from '../actions/ActionTypes';
import Cookies from 'js-cookie';
import data from '../data/reviews.json';

let initialState={
  reviews: []
}
if(Cookies.get('restReview')){
    initialState.reviews= [...initialState.reviews, JSON.parse(Cookies.get('restReview'))]
}
data['reviews'].map(review =>initialState.reviews= [...initialState.reviews, review]);
const reviewReducer = (state = initialState, action) => {
    let newState;    
  switch (action.type) {
    case actionType.ADD_REVIEW:
    Cookies.set('restReview',JSON.stringify(action.payload));
    newState = {
        reviews: [ action.payload,...state.reviews]
      }
    break;
    case actionType.REMOVE_REVIEW:
    Cookies.remove('restReview');
    newState = {
        itemCount: state.itemCount + 1,
        items: [...state.items, action.payload]
    }
    break;
    default:
    newState = state;
    break;
  }
  return newState;
}

export default reviewReducer;