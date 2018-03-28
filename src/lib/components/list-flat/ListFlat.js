import React from 'react';
import './ListFlat.css';

export default ({ items, itemTitleFunc, itemKeyFunc, handleClick, className }) => (
  <div className={'list-flat ' + (className ? className : '')}>
    {items.map(_ => (
      <button className="item" key={itemKeyFunc(_)} onClick={() => handleClick(_._id)}>
        {itemTitleFunc(_)}
      </button>
    ))}
  </div>
);
