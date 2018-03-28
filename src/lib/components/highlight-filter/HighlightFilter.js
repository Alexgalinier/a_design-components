import React from 'react';
import './HighlightFilter.css';

export default ({ value, filter }) => {
  if (!filter) return value;

  let parts = value.split(new RegExp('(' + filter + ')', 'gi'));
  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <span className="filter-match" key={i}>
        {parts[i]}
      </span>
    );
  }
  return <div>{parts}</div>;
};
