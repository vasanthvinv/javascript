

import React from 'react';
import  './button.css';

function Button(props) {
  const { type = "medium", disabled = false } = props;
  const isDisable = disabled ? "disable" : "";
  return (
    <div>
      <button className={`${type} ${isDisable}`}>Button</button>
    </div>
  );
}

export default Button;