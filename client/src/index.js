import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const title = "Social Links";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();
