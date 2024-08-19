import React, { useContext } from 'react';
import { FormDataContext } from './formtable.jsx';

const Table = ({ handleReviewChange, handleRemove, initialData }) => {
  const { formData } = useContext(FormDataContext);

  return (
    <table className='tblfull'>
      <tbody>
        <tr>
          {Object.keys(initialData).map(key => (
            <th className='tbl-head' key={key}>{key.toUpperCase()}</th>
          ))}
        </tr>
        {formData.map((item, index) => (
          <tr key={index}>
            <td className='table1'>{index + 1}</td>
            <td className='table1'>{item.name}</td>
            <td className='table1'>{item.phoneNo}</td>
            <td className='table1'>{item.email}</td>
            <td className='table1'>{item.gender}</td>
            <td className='table1'>{item.active}</td>
            <td className='tablecol1'>
              <input
                type="text"
                className='input-review'
                value={item.review}
                onChange={(e) => handleReviewChange(index, e.target.value)}
              />
            </td>
            <td className='table1'>{item.sports.join(', ')}</td>
            <td>
              <button className="rmtable" onClick={() => handleRemove(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
