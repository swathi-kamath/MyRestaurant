import * as actionType from './ActionTypes';

export const addItem = () => ({
  type: actionType.ADD_ITEM,
  payload: 1
});

export const addActiveUser = (activeUser) => ({
  type: actionType.ADD_ACTIVE_USER,
  payload: activeUser
});

export const removeActiveUser = () => ({
  type: actionType.REMOVE_ACTIVE_USER
});