import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./reducers/productsReducer.js";

const store = configureStore({
  reducer: {
    products: productsReducer
  },
});

store.subscribe(() => console.log(store.getState()));

export default store;
