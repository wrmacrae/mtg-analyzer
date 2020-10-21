import React from 'react';
import Card from './Card';

const Pick = ({ higherLink, higherName, pickedLink, pickedName, link }) => (
  <div>
    You picked <Card name={pickedName} link={pickedLink} /> over <Card name={higherName} link={higherLink} /> even though you it's graded lower: <a href={link}>{link}</a>
  </div>
);

export default Pick;