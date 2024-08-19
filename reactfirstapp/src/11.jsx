import React, { useState } from 'react';
import './11.css';

function Button() {
  const [buttons, setButtons] = useState(["","","","","","","","",""]);
  const [change, setChange] = useState('x');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || buttons[index]) return;
    
    const newButton = [...buttons];
    newButton[index] = change;
    setChange(change === 'x' ? 'o' : 'x');
    setButtons(newButton);

    const winning = res(newButton);
      if (winning) {
        setWinner(winning);
      }else if (newButton.every((item) => item !== '')) {
        setWinner('Draw');
      }
  };
  const res = (item) => {
  const chances = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < chances.length; i++) {
    const [a, b, c] = chances[i];
    if (item[a] && item[a] === item[b] && item[a] === item[c]) {
      return item[a];
    }
  }
};
  const status = () => {
    if (winner) {
        return winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`;
    } else {
      return `Next player: ${change}`;
    }
  };
  return (
    <div >{status()}
    <div className='tictoctoe'>
      {buttons.map((item, i) => (
        <button className='btn-tick' key={i} onClick={() => handleClick(i)}>
          {item}
        </button>
      ))}
    </div>
    </div>
  );
}

export default Button;


