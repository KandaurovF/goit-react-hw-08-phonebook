import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  showModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    toggleModal: state => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;

export const selectShowModal = state => state.modal;
