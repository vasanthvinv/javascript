import React, { useState } from 'react';
import './todolist.css';

function ToDoList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  const handleAddClick = () => {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  
  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const handleCheckbox = (index) => {
    setCheckedItem((prevChecked) =>
      prevChecked.includes(index)
        ? prevChecked.filter((i) => index !== i)
        : [...prevChecked, index]
    );
  };

  const handleRemoveChecked = () => {
    setItems((prev) => prev.filter((item,i) => !(checkedItem.includes(i))))
    setCheckedItem([])
  };
  const handleRemove  = (index) => {
    setItems((prev) => prev.filter((item,i) => i != index ))
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
