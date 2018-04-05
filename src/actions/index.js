import * as actionType from './ActionTypes';

export const addItem = (item) => ({
  type: actionType.ADD_ITEM,
  payload: item
});
export const removeitem = (itemid) => ({
  type: actionType.ADD_ITEM,
  payload: itemid
});

export const addActiveUser = (activeUser) => ({
  type: actionType.ADD_ACTIVE_USER,
  payload: activeUser
});

export const removeActiveUser = () => ({
  type: actionType.REMOVE_ACTIVE_USER
});