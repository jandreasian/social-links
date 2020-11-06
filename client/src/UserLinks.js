import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import LinkLists from "./LinkLists";
import "./style.css";
import logo from "../logo.png";
import user from "../user.png";

function UserLinks({ match }) {
  useEffect(() => {
    fetchLink();
  }, []);

  const [link, setLink] = useState({});
  const [links, setLinks] = useState([]);

  const fetchLink = async () => {
    const fetchLink = await fetch(`http://localhost:3000/${match.params.id}`);
    const socialLink = await fetchLink.json();
    console.log(socialLink.links[0].title);
    setLink(socialLink);
    setLinks(socialLink.links);
  };

  return (
    <div className='linkContainer'>
      <img src={user} className="user-logo" />
      <h2 className="mainTitle">{link.title}</h2>
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

export default UserLinks;
