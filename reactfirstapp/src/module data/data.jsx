import React, { useState, useEffect } from 'react';
import _ from 'lodash';

function Data() {
  const [datas, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://66cc14004290b1c4f19bd1fc.mockapi.io/data')
      .then(response => response.json())
      .then(data => {
        setdata(data);
        setLoading(false)
      })
      .catch(errors => { setError(errors); setLoading(false) });
  }, []);

  const handleRemove = (i) => {
    setdata(_.without(datas, datas[i]))
  }
  if (loading) {
    return <p>loading ...</p>
  }
  if (error) {
    return <p>Error:{error.name} </p>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Pets</th>
            <th>Address</th>
            <th>Password</th>
            <th>Vehicle</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, i) => (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td contentEditable suppressContentEditableWarning>{item.name}</td>
              <td contentEditable suppressContentEditableWarning>{item.gender}</td>
              <td contentEditable suppressContentEditableWarning>{item.Dob}</td>
              <td contentEditable suppressContentEditableWarning>{item.pets}</td>
              <td contentEditable suppressContentEditableWarning>{item.address}</td>
              <td contentEditable suppressContentEditableWarning>{item.password}</td>
              <td contentEditable suppressContentEditableWarning>{item.vehicle}</td>
              <td contentEditable suppressContentEditableWarning>{item.email}</td>
              <td><button onClick={() => handleRemove(i)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
