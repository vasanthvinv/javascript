

import React from 'react';
import  './button.css';

interface buttons {
type: 'small'| "medium" | "large";
disabled: boolean;
}
function Button(props:buttons): JSX.Element {
  const { type = true, disabled = 'false' } = props;
  const isDisable = disabled ? "disable" : "";
  return (
    <div>
      <button className={`${type} ${isDisable}`}>Button</button>
    </div>
  );
}


export default Button;