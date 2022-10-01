import React from "react";
import ReactDOM from "react-dom/client";
import { createContext } from "react";
import "./index.css";
import App from "./App";

const MyContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContext.Provider>
    <App />
  </MyContext.Provider>
);
