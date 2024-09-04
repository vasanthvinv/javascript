import React, { useContext } from 'react';
import { FormContext } from './FormContext.js';

interface FormContextType {
    details: boolean;
    formData: FormData[];
    handleViewAll: () => void;
  }
  interface FormData {
    name: string;
    phoneNo: string;
    email: string;
    gender: string;
    active: string;
    review: string;
    sports: string[];
  }

const DetailView = (): React.JSX.Element => {
  const { details,formData,handleViewAll } = useContext(FormContext) as FormContextType;

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

