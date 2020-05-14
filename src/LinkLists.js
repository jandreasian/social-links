import React from 'react';
import Links from './Links';

const LinkLists = (props) => {
  return (
    <div>
      {props.links.map((link) => (
        <Links key={link.id} {...link} />
      ))}
    </div>
  );
};

export default LinkLists;
