import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";
// eslint-disable-next-line
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore();
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
