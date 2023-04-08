import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoaderState from "./context/loader/LoaderSate";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoaderState>
      <App />
    </LoaderState>
  </React.StrictMode>
);
