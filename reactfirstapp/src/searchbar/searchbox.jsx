import React, { useState, useMemo } from "react";

const items = ["apple", "orange", "mango", "banana"];

const Dropdown = () => {
  const [search, setSearch] = useState('');
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     setFiltered(
//       items.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
//     );
//   }, [search]);


const filtered = useMemo(() => {
        return  items.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
      }, [search]);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={search}
        placeholder="Select an item"
        className="input"
      />
      {
        <ul className="list">
          {filtered.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Dropdown;