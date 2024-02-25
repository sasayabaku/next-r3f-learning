// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  modal: string;
}

const initialState: ModalState = {
  modal: 'initial',
};

export const modalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setModal: (state, action) => ({ modal: action.payload }),
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
