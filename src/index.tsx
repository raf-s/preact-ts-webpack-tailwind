import React from "preact/compat";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

React.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.body
);
