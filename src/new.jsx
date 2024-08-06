import React, { useState } from "react";
import "./dropdown.css";
import _ from "lodash";

const datas = [
  {
    id: 1,
    first_name: "Gavrielle",
    last_name: "Lineham",
    email: "glineham0@barnesandnoble.com",
    gender: "Female",
    country: "Russia",
  },
  {
    id: 2,
    first_name: "Michail",
    last_name: "Napolione",
    email: "mnapolione1@flickr.com",
    gender: "Male",
    country: "France",
  },
  {
    id: 3,
    first_name: "Marthena",
    last_name: "Antognoni",
    email: "mantognoni2@slate.com",
    gender: "Female",
    country: "China",
  },
  {
    id: 4,
    first_name: "Darrelle",
    last_name: "Plinck",
    email: "dplinck3@vinaora.com",
    gender: "Female",
    country: "France",
  },
  {
    id: 5,
    first_name: "Matthias",
    last_name: "Whyffen",
    email: "mwhyffen4@ft.com",
    gender: "Male",
    country: "Japan",
  },
];

const Dropdown = (props) => {
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(datas);
  const [checked, setChecked] = useState([]);

  const handleSelectChange = ({ target }) => {
    setSelected((prev) => [...prev, target.value]);
  };

  const handleRemoveOption = (option) => {
    setOptions((prev) => prev.filter((options) => options !== option));
    setSelected((prev) =>
      prev.filter((options) => options != option.first_name)
    );
  };

  const handleCheckbox = (name) => {
    setChecked((prevChecked) =>
      prevChecked.includes(name)
        ? prevChecked.filter((itemId) => itemId !== name)
        : [...prevChecked, name]
    );
  };

  const handleDelete = () => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => !checked.includes(option.first_name))
    );
    setSelected((prevOptions) =>
      prevOptions.filter((option) => !checked.includes(option))
    );
  };

  return (
    <div>
      <table className="optiontable">
        {options.map((option) => (
          <tr key={option.id}>
            <td>
              <input
                type="checkbox"
                onChange={() => handleCheckbox(option.first_name)}
              />
            </td>
            <td>{option.id}</td>
            <td>{option.first_name}</td>
            <td>{option.last_name}</td>
            <td>{option.email}</td>
            <td>{option.gender}</td>
            <td>{option.country}</td>
            <td>
              <button
                className="buttons"
                onClick={() => handleRemoveOption(option)}
              >
                -
              </button>
            </td>
          </tr>
        ))}
      </table>
      <button onClick={handleDelete}>Delete</button>
      <hr />
      <input
        className="options"
        placeholder="select an Options"
        value={selected}
      />
      <br />
      <select
        className="drop"
        placeholder="select"
        onChange={handleSelectChange}
      >
        <>
          {options.map((item) => (
            <option className="drop1" key={item.id} value={item.first_name}>
              {item.first_name}
            </option>
          ))}
        </>
      </select>
      <br />
    </div>
  );
};
export default Dropdown;
