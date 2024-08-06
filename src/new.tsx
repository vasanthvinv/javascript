import React, { useState } from "react";
import "./dropdown.css";

// Example data array with objects
const datas = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Orange" },
  { id: 3, name: "Mango" },
  { id: 4, name: "Pineapple" },
];

const Dropdown = (props) => {
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState(datas);

  // Handle selection change
  const handleSelectChange = (event) => {
    const selectedOption = options.find(option => option.id === parseInt(event.target.value));
    setSelected(selectedOption ? selectedOption.name : '');
    console.log("Selected:", selectedOption ? selectedOption.name : '');
  };

  // Handle option removal
  const handleRemoveOption = (optionId) => {
    setOptions(prev => prev.filter(option => option.id !== optionId));
  };

  return (
    <div>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.name}
            <button className="buttons" onClick={() => handleRemoveOption(option.id)}>-</button>
          </li>
        ))}
      </ul>
      <hr/>
      <input className="options" placeholder="Options" value={selected} readOnly />
      <select className="drop" onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((item) => (
          <option className="drop1" key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
