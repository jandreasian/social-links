import React from "react";
import "./style.css";

const Links = (props) => {
  return (
    <a href={props.url} className="link" target="_blank">
      <h1 className="linkBox">{props.title}</h1>
    </a>
  );
};
export default Links;
