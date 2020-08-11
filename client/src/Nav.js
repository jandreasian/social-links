import React from "react";
import styles from "./style.css";
import { Link } from "react-router-dom";

const navStyle = {
  color: "white",
};

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link style={navStyle} to="/">
          <h3>Logo</h3>
        </Link>
        <ul className={styles.navLinks}>
          <Link style={navStyle} to="/sample">
            <li>Sample</li>
          </Link>
          <Link style={navStyle} to="/create">
            <li>Create</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
