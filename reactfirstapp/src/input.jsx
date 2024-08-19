import React, { useState } from 'react';
import './input.css';

const initialData = {
  id: "",
  name: '',
  phoneNo: '',
  email: '',
  gender: '',
  active: '',
  review: '',
  sports: [],
  remove: ""
};

const InputField = () => {
  const [form, setForm] = useState(initialData);
  const [formData, setFormData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false); 

  const handleSportOpen = () => setIsOpen(!isOpen);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, form]);
    setForm(initialData);
    console.log(formData);
  };

  const handleRemove = (index) => {
    setFormData(formData.filter((item, i) => i !== index));
  };

  const handleSports = ({ target }) => {
    const { value, checked } = target;
    setForm(prevState => ({
      ...prevState,
      sports: checked 
        ? [...prevState.sports, value]
        : prevState.sports.filter(sport => sport !== value),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleReviewChange = (index, newReview) => {
    setFormData(formData.map((item, i) => 
      i === index ? { ...item, review: newReview } : item
    ));
  };

  const handleViewAll = () => {
    setDetailsVisible(!detailsVisible); 
  };

  return (
    <div>
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
                  value={item.review}
                  onChange={(e) => handleReviewChange(index, e.target.value)}
                />
              </td>
              <td className='table1'>{item.sports.join(', ')}</td>
              <td><button className="rmtable" onClick={() => handleRemove(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <button onClick={handleViewAll}>View All Details</button>

      {detailsVisible && (
        <div className='viewlalllist'>
          {formData.map((item, index) => (
            <div key={index} className='tablecss'>
              <p className='table'><strong>ID:</strong></p><p>{index + 1}</p>
              <p className='table'><strong>NAME:</strong></p><p>{item.name}</p>
              <p className='table'><strong>PHONE NUMBER:</strong></p><p>{item.phoneNo}</p>
              <p className='table'><strong>EMAIL:</strong></p><p>{item.email}</p>
              <p className='table'><strong>GENDER:</strong></p><p>{item.gender}</p>
              <p className='table'><strong>ACTIVE:</strong></p><p>{item.active}</p>
              <p className='table'><strong>REVIEW:</strong></p><p>{item.review}</p>
              <p className='table'><strong>SPORTS:</strong></p><p>{item.sports.join(', ')}</p>
            </div>
          ))}
        </div>
      )}

      <br /><br />
      <form className='input-form' onSubmit={handleSubmit}>
        <div>
          <strong>Name:</strong><br />
          <input
            type="text"
            name="name"
            className='input-form1'
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <strong>Phone Number:</strong><br />
          <input
            name="phoneNo"
            className='input-form1'
            value={form.phoneNo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <strong>Email:</strong><br />
          <input
            name="email"
            className='input-form1'
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <br />
        <div>
          <strong>Gender:</strong>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === 'male'}
              onChange={handleInputChange}
              required
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === 'female'}
              onChange={handleInputChange}
              required
            />
            Female
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={form.gender === 'others'}
              onChange={handleInputChange}
              required
            />
            Others
          </div>
        </div>
        <br />
        <div>
          <strong>Active:</strong>
          <div>
            <input
              type="radio"
              name="active"
              value="false"
              checked={form.active === 'false'}
              onChange={handleInputChange}
              required
            />
            False
          </div>
          <div>
            <input
              type="radio"
              name="active"
              value="true"
              checked={form.active === 'true'}
              onChange={handleInputChange}
              required
            />
            True
          </div>
        </div>
        <br />
        <div>
          <strong>Review:</strong><br />
          <input
            name="review"
            className='input-form1'
            value={form.review}
            onChange={handleInputChange}
            required
          />
        </div>
        <h4 onClick={handleSportOpen}>
          Games:
        </h4>
        {isOpen && (
          <ul>
            <li>
              <input
                type='checkbox'
                value="Gta"
                checked={form.sports.includes('Gta')}
                onChange={handleSports}
              />
              Gta
            </li>
            <li>
              <input
                type='checkbox'
                value="Cricket"
                checked={form.sports.includes('Cricket')}
                onChange={handleSports}
              />
              Cricket
            </li>
            <li>
              <input
                type='checkbox'
                value="Chess"
                checked={form.sports.includes('Chess')}
                onChange={handleSports}
              />
              Chess
            </li>
            <li>
              <input
                type='checkbox'
                value="VolleyBall"
                checked={form.sports.includes('VolleyBall')}
                onChange={handleSports}
              />
              Volleyball
            </li>
          </ul>
        )}
        <button className="submit-btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputField;
