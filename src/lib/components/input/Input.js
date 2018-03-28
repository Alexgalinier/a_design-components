import React from 'react';
import './Input.css';

export default ({ name, inputValue, inputOnChange, inputRef, className, ...props }) => (
  <input
    {...props}
    ref={inputRef}
    className={'input ' + (className ? className : '')}
    type="text"
    name={name}
    value={inputValue}
    onChange={inputOnChange}
  />
);
