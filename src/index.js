import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import allReducers from "./todolist/redux/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import i18n from "./todolist/utils/config.language";
import { I18nextProvider } from "react-i18next";

let store = createStore(allReducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

reportWebVitals();
