import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { carsReducer } from "./Slice/autoSlice";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "../favorites/favoriteSlice";
import { modalReducer } from "./Slice/modalSlise";
import { filterReducer } from "./Slice/filterSlice";

const persistConfig = {
  key: "root",
  storage,
};

const CarsPersist = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    data: CarsPersist,
    modal: modalReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
