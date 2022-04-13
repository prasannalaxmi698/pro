import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Provider store={store}>
  <App />
</Provider>
);
