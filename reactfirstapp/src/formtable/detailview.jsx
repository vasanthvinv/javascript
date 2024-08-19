
import React, { useState,useContext } from 'react';
import {FormDataContext} from './formtable.jsx';
const DetailView = () => {
  const formData = useContext(FormDataContext);

  const [detailsVisible, setDetailsVisible] = useState(false); 

  const handleViewAll = () => {
    setDetailsVisible(!detailsVisible); 
  };

  return (
    <div className='viewlalllist1'>
      <button className='view-btn' onClick={handleViewAll}>View All Details</button>
      {detailsVisible && formData.map((item, index) => (
        <ol key={index} className='tablecss'>
         <li> <div className='table'>ID:{index + 1}</div></li>
         <li> <div className='table'>NAME:</div><div>{item.name}</div></li>
         <li> <div className='table'>PHONE NUMBER:</div><div>{item.phoneNo}</div></li>
         <li> <div className='table'>EMAIL:</div><div>{item.email}</div></li>
         <li> <div className='table'>GENDER:</div><div>{item.gender}</div></li>
         <li> <div className='table'>ACTIVE:</div><div>{item.active}</div></li>
         <li> <div className='table'>REVIEW:</div><div>{item.review}</div></li>
         <li> <div className='table'>SPORTS:</div><div>{item.sports.join(', ')}</div></li>
        </ol>
      ))}
    </div>
  );
};

export default DetailView;
