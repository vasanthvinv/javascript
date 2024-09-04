import React, { useState } from 'react';
import './todolist.css';

function ToDoList():  React.JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);
  const [checkedItem, setCheckedItem] = useState<number[]>([]);

  const handleAddClick = ():void => {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  
  const handleInputChange = ({target}):void => {
    setInputValue(target.value);
  };

  const handleCheckbox = (index:number):void => {
    setCheckedItem((prevChecked) =>
      prevChecked.includes(index)
        ? prevChecked.filter((i) => index !== i)
        : [...prevChecked, index]
    );
  };

  
  const handleRemoveChecked = ():void => {
    setItems((prev) => prev.filter((item,i) => !(checkedItem.includes(i))))
    setCheckedItem([])
  };

  const handleRemove  = (index:number):void => {
    setItems((prev) => prev.filter((item,i) => i !== index ))
    setCheckedItem([])
  };

  return (
    <div className="todolist">
    <div className="new-task">
        <h2 className='heading'>TODO LIST</h2>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputChange}
          className='input'
        />
        <button className='btn-add'  onClick={handleAddClick}>+</button>
    </div>
        <br/>
    <div className='spantag'>
        {items.map((item, index) => (
          <div key={index} className='todo-content' >

            <input
              type="checkbox"
              checked={checkedItem.includes(index)}
              onChange={() => handleCheckbox(index)}
              className='check-input'
            />
           <span className='item'>{item } </span>
           <button className='btnRmCheckbox' onClick={()=>handleRemove(index)}> x</button>
           <hr/> 
           </div>
        ))}
    </div>
       <br/>
       <div className="task-count">
       <button>{ checkedItem.length} item of {items.length}</button>
       <button onClick={handleRemoveChecked}>Remove checked x</button>
    </div>
    </div>

  );
}

export default ToDoList;