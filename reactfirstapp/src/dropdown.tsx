import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = ():React.JSX.Element => {
  const datas: string[] = ["Apple", "Orange", "Mango", "PineApple"];
  const [selected, setSelected] = useState<string[]>([]);
  const [options, setOptions] = useState<string[]>(datas);

  const handleSelectChange = (e: { target: { value: string; }; }) => {
    setSelected((prev) => ([...prev,e.target.value]));
    console.log("Selected:", e.target.value);
  };

  const handleRemoveOption = (optionRemove: string) => {
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
          <option className="drop1" key={index} onClick={()=>handleSelectChange}>{item} </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;


