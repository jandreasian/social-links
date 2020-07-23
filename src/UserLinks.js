import React from "react";

function UserLinks({ match }) {
  return <div>{match.params.id}</div>;
}

export default UserLinks;
