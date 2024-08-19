import React, { useState } from 'react';
import './input.css';

const InputField = () => {
  const [active, setActive] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [review, setReview] = useState('');
  const [sports, setSports] = useState([]);
  const [formData, setFormData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    setFormData([...formData, { name, phoneNo, email, gender, active, review, sports }]);
    setName('');
    setPhoneNo('');
    setEmail('');
    setGender('');
    setActive('');
    setReview('');
    setSports([]);
    console.log(formData);
  };

  const handleRemove = (index) => {
    setFormData(formData.filter((item, i) => i !== index));
  };

  const handleSportsChange = (event) => {
    const { value, checked } = event.target;
    setSports((prevSports) => {
      if (checked) {
        return [...prevSports, value];
      } else {
        return prevSports.filter((sport) => sport !== value);
      }
    });
  };

  return (
    <div>
      <table className='tblfull'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>ACTIVE</th>
            <th>REVIEW</th>
            <th>GAMES</th>
            <th>VIEW</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td className='tablecol'>{index + 1}</td>
              <td className='tablecol'>{item.name}</td>
              <td className='tablecol'>{item.phoneNo}</td>
              <td className='tablecol'>{item.email}</td>
              <td className='tablecol'>{item.gender}</td>
              <td className='tablecol'>{item.active}</td>
              <td className='tablecol1' contentEditable>{item.review}</td>
              <td className='tablecol'>{item.sports.join(', ')}</td>
              <td><button>View</button></td>
              <td><button onClick={() => handleRemove(index)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /><br />
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Phone Number:
        <input value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br /><br />
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={() => setGender('male')}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={() => setGender('female')}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="others"
            checked={gender === 'others'}
            onChange={() => setGender('others')}
          />
          Others
        </label>
      </div>
      <br /><br />
      <div>
        Active:
        <label>
          <input
            type="radio"
            name="active"
            value="false"
            checked={active === 'false'}
            onChange={() => setActive('false')}
          />
          False
        </label>
        <label>
          <input
            type="radio"
            name="active"
            value="true"
            checked={active === 'true'}
            onChange={() => setActive('true')}
          />
          True
        </label>
      </div>
      <br />
      <label>
        REVIEW:
        <input value={review} onChange={(e) => setReview(e.target.value)} />
      </label>
      <br /> <br />
      <button onClick={handleChange}>
        Games
      </button>
      {isOpen && (
        <ul>
          <li>
            <input
              type='checkbox'
              value="Gta"
              checked={sports.includes('Gta')}
              onChange={handleSportsChange}
            />
            Gta
          </li>
          <li>
            <input
              type='checkbox'
              value="Cricket"
              checked={sports.includes('Cricket')}
              onChange={handleSportsChange}
            />
            Cricket
          </li>
          <li>
            <input
              type='checkbox'
              value="Chess"
              checked={sports.includes('Chess')}
              onChange={handleSportsChange}
            />
            Chess
          </li>
          <li>
            <input
              type='checkbox'
              value="VolleyBall"
              checked={sports.includes('VolleyBall')}
              onChange={handleSportsChange}
            />
            Volleyball
          </li>
        </ul>
      )}
      <br /><br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputField;
