import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import basketReducer from "../features/basket/basketSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      basket: basketReducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
