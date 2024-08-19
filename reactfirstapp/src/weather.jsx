import './App.css';
import React, { useState,useEffect } from 'react';

function WeatherApp() {
  const[isOpen,SetIsOpen] = useState(false);
  const[isOpenDetail,SetIsOpenDetail] = useState(false);

  const[data,SetData] = useState();

  const handleview  =() =>{
    SetIsOpen(!isOpen)
  }

  useEffect(() => {
    // alert(`place changed as ${data}`)
}, [data]);

 const handleEvent =(e) =>{
  e.preventDefault();
  SetIsOpenDetail(!isOpenDetail)
 }

  return (
    <div className="App">
     <input className='input-btn' placeholder='search city'onClick={handleview} value={data}/><button className='btn' onClick={handleEvent}>{ `-->`}</button>
     {isOpen &&<ul>
      <div  onClick={() =>SetData("Tirupur")}>Tirupur</div>
      <div  onClick={() =>SetData("Coimbatore")} value="Coimbatore">Coimbatore</div>
      <div  onClick={() =>SetData("Chennai")} value="Chennai">Chennai</div>
      <div  onClick={() =>SetData("Mumbai")} value="Mumbai">Mumbai</div>
      </ul>
      }
<div>
  {isOpenDetail &&
  <h2>{data}</h2>
  }
</div>
    </div>
  );
}

export default WeatherApp;
