import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { filtersReducer } from "./filtersSlice";
import { contactsPersistedReducer } from "./contactsSlice";

const reducers = combineReducers({
  filters: filtersReducer,
  contacts: contactsPersistedReducer,
});


export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);
