import { createSlice } from '@reduxjs/toolkit';
import { fetchDataThunk } from './contactsOps';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: INITIAL_STATE,

  reducers: {
    addContact(state, action) {
      {
        state.items.push(action.payload);
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
