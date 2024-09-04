import React, { useContext } from 'react';
import { FormContext } from './FormContext.js';

interface FormData {
    name: string;
    phoneNo: string;
    email: string;
    gender: string;
    active: string;
    review: string;
    sports: string[];
  }
 

const SportCheckboxes = (): React.JSX.Element => {
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
