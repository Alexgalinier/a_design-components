import React from 'react';
import './Block.css';

export default ({ title, className, children }) => (
  <div className={'block ' + className}>
    <h4 className="block-title">{title}</h4>
    <div className="block-content">{children}</div>
  </div>
);
