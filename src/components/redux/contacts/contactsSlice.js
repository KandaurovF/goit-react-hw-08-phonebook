import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './API';
import {
  getActions,
  handleFulfilledGet,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handlePending,
  handleFulfilled,
  handleRejected,
} from './contactsReducers';

const initialState = {
  contactCards: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.contactCards;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
