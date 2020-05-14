import React from "react";
import styles from "./style.css";

const Links = (props) => {
  return (
    <a href={props.link} className={styles.link}>
      <h1 className={styles.linkBox}>{props.link_text}</h1>
    </a>
  );
};
export default Links;
