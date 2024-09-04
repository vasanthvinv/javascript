import React, { useState } from 'react';
// import './input.css';

const InputField = () => {
  const [active, setActive] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [review, setReview] = useState('');
  const [sports, setSports] = useState([]);
  const [formData, setFormData] = useState([]);
  const[isOpen,setIsOpen]= useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

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
    if (expandedIndex === index) {
      setExpandedIndex(null);
    }
  };

  const handleSports = ({ target }) => {
    const { value, checked } = target;
    setSports((prevSports) =>
      checked ? [...prevSports, value] : prevSports.filter((sport) => sport !== value)
    );
  };

  const toggleView = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <h4 key={index}>
              <tr>
                <td className='table'>{index + 1}</td>
                <td className='table'>{item.name}</td>
                <td className='table'>{item.phoneNo}</td>
                <td className='table'>{item.email}</td>
                <td className='table'>{item.gender}</td>
                <td className='table'>{item.active}</td>
                <td className='tablecol1' contentEditable>{item.review}</td>
                <td className='table'>{item.sports.join(', ')}</td>
                <td>
                  <button onClick={() => toggleView(index)}>
                    {expandedIndex === index ? 'Hide' : 'View'}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleRemove(index)}>X</button>
                </td>
              </tr>
              {expandedIndex === index && (
                <tr>
                  <td colSpan="10">
                    <div>
                      <p>Name: {item.name}</p>
                      <p>Phone Number: {item.phoneNo}</p>
                      <p>Email: {item.email}</p>
                      <p>Gender: {item.gender}</p>
                      <p>Active: {item.active}</p>
                      <p>Review: {item.review}</p>
                      <p>Sports: {item.sports.join(', ')}</p>
                    </div>
                  </td>
                </tr>
              )}
                        </h4>

          ))}
        </tbody>
      </table>

      <br /><br />
      <div className='input-form'>
        <div>
          Name: <br />
          <input className='input-form1' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Phone Number: <br />
          <input className='input-form1' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
        </div>
        <div>
          Email: <br />
          <input className='input-form1' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />
        <div>
          Gender:
          <div>
            <input
              type="radio"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            Female
          </div>
          <div>
            <input
              type="radio"
              value="others"
              checked={gender === 'others'}
              onChange={() => setGender('others')}
            />
            Others
          </div>
        </div>
        <br />
        <div>
          Active:
          <div>
            <input
              type="radio"
              name="active"
              value="false"
              checked={active === 'false'}
              onChange={() => setActive('false')}
            />
            False
          </div>
          <div>
            <input
              type="radio"
              name="active"
              value="true"
              checked={active === 'true'}
              onChange={() => setActive('true')}
            />
            True
          </div>
        </div>
        <br />
        <div>
          REVIEW:<br />
          <input className='input-form1' value={review} onChange={(e) => setReview(e.target.value)} />
        </div>
        <h4 onClick={handleChange}>
          Games:
        </h4>
        {isOpen && (
          <ul>
            <li>
              <input
                type='checkbox'
                value="Gta"
                checked={sports.includes('Gta')}
                onChange={handleSports}
              />
              Gta
            </li>
            <li>
              <input
                type='checkbox'
                value="Cricket"
                checked={sports.includes('Cricket')}
                onChange={handleSports}
              />
              Cricket
            </li>
            <li>
              <input
                type='checkbox'
                value="Chess"
                checked={sports.includes('Chess')}
                onChange={handleSports}
              />
              Chess
            </li>
            <li>
              <input
                type='checkbox'
                value="VolleyBall"
                checked={sports.includes('VolleyBall')}
                onChange={handleSports}
              />
              Volleyball
            </li>
          </ul>
        )}
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default InputField;
