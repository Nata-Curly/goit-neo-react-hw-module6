import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, { payload }) {
      //   return {
      //       ...state,
      //       items: [...state.items, payload]
      //   }
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      //   return {
      //       ...state,
      //       items: state.items.filter(item =>item.id!==payload)
      //   }
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: "contacts",
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactsReducer
);
