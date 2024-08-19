import React, { useContext } from 'react';
import { FormContext } from './FormContext.js';

const SportCheckboxes = () => {
  const { form, handleSports } = useContext(FormContext);

  return (
    <ul>
      {['Gta', 'Cricket', 'Chess', 'Volleyball'].map(sport => (
        <li key={sport}>
          <input
            type='checkbox'
            value={sport}
            checked={form.sports.includes(sport)}
            onChange={handleSports}
          />
          {sport}
        </li>
      ))}
    </ul>
  );
};

export default SportCheckboxes;
