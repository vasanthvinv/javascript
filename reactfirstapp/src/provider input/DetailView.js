import React, { useContext } from 'react';
import { FormContext } from './FormContext.js';

const DetailView = () => {
  const { details,formData,handleViewAll } = useContext(FormContext);

  return (
    <div>
    <button className='view-btn' onClick={handleViewAll}>View All Details</button>
    <div className='viewlalllist'>
      {details && formData.map((item, index) => (
        <>
            <ol className='viewdetail'>
        { Object.entries(item).map(([name,value],index)=>(
            <li className='viewdetaillist'><span>{name}</span><span>{value}</span>
            </li>
        ))}
          </ol>
          </>

      ))}
    </div>
    </div>
  );
};

export default DetailView;
