import React, { useState } from 'react';

const Password = ({ handleNavigation }) => {
  const [data, setData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ username: '', password: '' });
  };

  return (
    <div className='password-div'>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className='inputdiv'>
          <input
            className='input'
            placeholder='Username'
            name='username'
            value={data.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='inputdivs'>
          <input
            className='input'
            placeholder='new password'
            name='pwd'
            value={data.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="registers"><br />
          <button>Submit</button>
          <nav onClick={() => handleNavigation("login")}>Click To Login</nav>
        </div>
      </form>
    </div>

  )
}

export default Password;
