import React from 'react';

const SportsCheckbox = ({ handleSports, sports }) => {
  const options = ["Gta", "Cricket", "Chess", "Volleyball"];

  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <input
            type='checkbox'
            value={option}
            checked={sports.includes(option)}
            onChange={handleSports}
          />
          {option}
        </li>
      ))}
    </ul>
  );
};

export default SportsCheckbox;
