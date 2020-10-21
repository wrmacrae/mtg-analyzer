import React from 'react';
import './Checklist.scss';

const Checklist = ({ children }) => (
  <div className="panel">
    <div className="panel-heading">
      <h1>Habits</h1>
      <small>A quick overview of the habits of high-winrate drafters, and how your statistics compare to those. Optimizing these metrics isn't always right, but they may still help you identify areas for improvement.</small>
    </div>
    <div className="panel-body">
      <ul className="checklist">
        {children}
      </ul>
    </div>
  </div>
);

export default Checklist;