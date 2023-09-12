import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filterSlice';
// import { modalReducer } from './modalSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  // modal: modalReducer,
});
