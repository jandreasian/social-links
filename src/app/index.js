import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/MainPage";

import "bootstrap/dist/css/bootstrap.min.css";

const title = "Social Links";

ReactDOM.render(<Main title={title} />, document.getElementById("app"));

module.hot.accept();
