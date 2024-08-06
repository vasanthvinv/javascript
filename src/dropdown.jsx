import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = () => {
  const datas = ["Apple", "Orange", "Mango", "PineApple"];
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState(datas);

  const handleSelectChange = ({ target }) => {
    setSelected((prev) => ([...prev,target.value]));
    console.log("Selected:", target.value);
  };

  const handleRemoveOption = (optionRemove) => {
    setOptions((prev) =>
      prev.filter((options) => options !== optionRemove)
    );
    setSelected((prev) =>
      prev.filter((options) => options !== optionRemove)
    );
  };

  return (
    <div>
      <li>
        {options.map((option) => (
          <div key={option}>
            {option}
            <button className="buttons" onClick={() => handleRemoveOption(option)}>-</button>
          </div>
        ))}
      </li>
      <hr/>
      <input className="options" placeholder="Options" value={selected}/>
      <select className="drop" >
        {options.map((item, index) => (
          <option lassName="drop1" key={index} onClick={handleSelectChange}>{item} </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;



