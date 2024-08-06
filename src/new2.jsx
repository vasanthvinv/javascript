import React, { useState } from "react";
import "./dropdown.css";

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

const Dropdown = () => {
  const [options, setOptions] = useState(datas);
  const [checked, setChecked] = useState([]);

  const handleCheckboxChange = (id) => {
    setChecked((prevChecked) =>
      prevChecked.includes(id)
        ? prevChecked.filter((itemId) => itemId !== id)
        : [...prevChecked, id]
    );
  };

  const handleDelete = () => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => !checked.includes(option.id))
    );
    setChecked([]);
  };

  return (
    <div>
      <table className="optiontable">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checked.includes(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                />
              </td>
              <td>{option.id}</td>
              <td>{option.first_name}</td>
              <td>{option.last_name}</td>
              <td>{option.email}</td>
              <td>{option.gender}</td>
              <td>{option.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
};

export default Dropdown;
