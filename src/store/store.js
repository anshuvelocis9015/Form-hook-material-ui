import { configureStore } from "@reduxjs/toolkit";
import formReducer1 from "./formSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, formReducer1)
  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
    // middleware: [thunk]
  })

  export const persistor = persistStore(store)


