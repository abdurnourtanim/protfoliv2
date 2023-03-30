import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/landing.css";
import "./styles/portfolio.css";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    s
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
