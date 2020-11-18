import React from 'react';
import Link from './Link';

const LinkLists = (props) => {
  return (
    <div>
      {props.links.map((link) => (
        <Link key={link.id} {...link} />
      ))}
    </div>
  );
};

export default LinkLists;
