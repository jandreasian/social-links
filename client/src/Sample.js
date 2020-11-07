import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LinkLists from "./LinkLists";
import logo from "../logo.png";
import user from "../user.png";

const testData = [
  {
    orderNumer: 0,
    title: "Google",
    url: "https://www.google.com",
  },
  {
    orderNumer: 1,
    title: "GitHub",
    url: "https://github.com/jandreasian/social-links",
  },
  {
    orderNumer: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/josh-andreasian-9931a393/",
  }
];

function Sample() {

  const [links] = useState(testData);

  return (
    <div className='linkContainer'>
      <img src={user} className="user-logo" />
      <h2 className="mainTitle">Sample</h2>
      <body>
        <div>
          <LinkLists links={links} />
        </div>
      </body>
      <footer>
        <Link to="/">
          <img src={logo} className="app-logo"/>
        </Link>
      </footer>
    </div>
  );
}

export default Sample;
