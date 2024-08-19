import React, { useContext } from 'react';
import SportCheckboxes from './SportCheckboxes';
import { FormContext } from './FormContext.js';

const FormInput = () => {
  const {form,handleInputChange, handleSubmit,  isOpen, handleSportOpen, inputRef } = useContext(FormContext);

  return (
    <form className='input-form' onSubmit={handleSubmit}>
      <div>
        <strong>Name:</strong><br />
        <input
          ref={inputRef}
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
      {isOpen && <SportCheckboxes />}
      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
};

export default FormInput;
