import React, { useState, useEffect } from "react";
import LinkLists from "./LinkLists";
import "./style.css";

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
    <div>
      <h1 className="mainTitle">{link.title}</h1>
      <body>
        <div>
          <LinkLists links={links} />
        </div>
      </body>
    </div>
  );
}

export default UserLinks;
