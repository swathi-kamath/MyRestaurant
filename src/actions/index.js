import * as actionType from './ActionTypes';

export const addItem = (item) => ({
  type: actionType.ADD_ITEM,
  payload: item
});
export const removeItem = (itemid) => ({
  type: actionType.REMOVE_ITEM,
  payload: itemid
});
export const incrementItem = (itemid) => ({
  type: actionType.INCREMENT_ITEM,
  payload: itemid
});
export const decrementItem = (itemid) => ({
  type: actionType.DECREMENT_ITEM,
  payload: itemid
});
export const addReview = (review) => ({
  type: actionType.ADD_REVIEW,
  payload:review
});
export const removeReview = (user) => ({
  type: actionType.REMOVE_ACTIVE_USER,
  payload:user
});
export const addActiveUser = (activeUser) => ({
  type: actionType.ADD_ACTIVE_USER,
  payload: activeUser
});
export const clearCart = () => ({
  type: actionType.CLEAR_CART
});
export const removeActiveUser = () => ({
  type: actionType.REMOVE_ACTIVE_USER
});
