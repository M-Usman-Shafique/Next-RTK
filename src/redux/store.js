// src/redux/store.js
const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./slices/todoSlice";
import fetchTodoReducer from "./slices/fetchTodoSlice";

// Combine reducers
const rootReducer = combineReducers({
  globalTodo: todoReducer,
  fetchTodoReducer,
});

// Configure persist
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["fetchTodoReducer"],
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store and adjust middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
