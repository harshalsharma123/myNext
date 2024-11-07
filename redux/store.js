// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { PERSIST, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage for persistence
import authSlice from "./slices/authSlice";
import { thunk } from "redux-thunk";
import { combineReducers } from "redux";

// Configure redux-persist
const persistConfig = {
  key: "root", // key to store the state in localStorage
  storage, // this tells redux-persist to use localStorage
};

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: {
//     auth: persistedReducer, // Use the persisted reducer
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

// const persistor = persistStore(store);

export const wrapper = createWrapper(() => store);

// export { store, persistor };

//return an object that holds the complete state of your app
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store); //persist the store to save the data locally
