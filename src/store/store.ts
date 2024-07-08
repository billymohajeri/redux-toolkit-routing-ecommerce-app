import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/products/productSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
