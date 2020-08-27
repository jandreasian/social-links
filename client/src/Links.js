import React from "react";
import styles from "./style.css";

const Links = (props) => {
  return (
    <a href={props.url} className={styles.link} target="_blank">
      <h1 className={styles.linkBox}>{props.title}</h1>
    </a>
  );
};
export default Links;
