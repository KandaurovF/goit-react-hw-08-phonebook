import { Notify } from 'notiflix';
import { fetchContacts, addContact, deleteContact } from './API';

const extraActions = [fetchContacts, addContact, deleteContact];
export const getActions = type => extraActions.map(action => action[type]);

export const handleFulfilledGet = (state, { payload }) => {
  state.contactCards = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.contactCards.push(payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  const index = state.contactCards.findIndex(
    contact => contact.id === payload.id
  );
  state.contactCards.splice(index, 1);
  // return state.contactCards.filter(contact => contact.id !== payload.id);
  Notify.success('Contact successfully removed');
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.contactCards = payload;
};
