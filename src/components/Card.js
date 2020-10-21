import React from 'react';
import ReactTooltip from 'react-tooltip';

const Card = ({ name, link }) => (
  <a data-tip data-for={name} href={link}>{name}
  <ReactTooltip id={name} place="top" effect="solid">
    <img src={link} style={{width: "250px"}}/>
  </ReactTooltip>
  </a>
);

export default Card;
