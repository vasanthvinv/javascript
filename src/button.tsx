import React from 'react';
import './button.css';

interface ButtonProps {
    type?: string;
    disabled?: boolean;
  }

function Button(props:ButtonProps) {
  const { type, disabled } = props;
  const isDisable = disabled ? "disable" : "";
  return (
    <div>
      <button className={`${type} ${isDisable}`}>Button</button>
    </div>
  );
}

Button.defaultProps = {
  type: "medium",
  disabled: false,
};

export default Button;
