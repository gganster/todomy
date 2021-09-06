import "./config/firebase";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/global.css";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

reportWebVitals();
