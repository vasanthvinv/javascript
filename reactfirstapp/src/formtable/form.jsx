
import React,{useState} from 'react';
import SportsCheckbox from './sports.jsx';


const Form = ({ form, setForm, setFormData, initialData }) => {
  const [isOpen, setIsOpen] = useState(false);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleSportOpen = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(form);
    setForm(initialData);  
    console.log(form);
  };

  return (
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
      <h4 onClick={handleSportOpen}>Games:</h4>
      {isOpen && <SportsCheckbox handleSports={handleSports} sports={form.sports} />}
      <button className="submit-btn" type="submit">Submit</button>
      <br /><br />
    </form>
  );
};

export default Form;
