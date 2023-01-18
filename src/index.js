import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";
// eslint-disable-next-line
import "swiper/css/bundle";
import history from "./app/utils/history";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore();
root.render(
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
