import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import { reducer } from "./redux/reducer";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
const store = configureStore({ reducer, middleware });
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
