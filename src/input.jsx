import React, { useState } from "react";
import "./input.css";

function Input() {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = ({ target }) => {
    const letterOnly = /^[A-Za-z]*$/;
    let names = target.value;
    if (letterOnly.test(names)) {
      setName(names);
    } else {
      alert("! Not a letter");
    }
  };
  const handleNumberChange = ({ target }) => {
    let numbers = target.value;
    if (Number(numbers)) {
      setMobileNumber(numbers);
    } else {
      alert(" ! Not a number");
    }
  };
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);
    console.log("Email:", email);
    setName("");
    setMobileNumber("");
    setEmail("");
  };

  return (
    <table className="table">
      <tr>
        <td>Name:</td>
        <td>
          <input
            type="text"
            className="name"
            pattern="[A-Za-z]+"
            value={name}
            onChange={handleNameChange}
          />
        </td>
      </tr>
      <tr>
        <td>Mobile Number:</td>
        <td>
          <input
            type="numbers"
            className="numbers"
            value={mobileNumber}
            onChange={handleNumberChange}
          />
        </td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>
          <input
            type="email"
            className="email"
            value={email}
            onChange={handleEmailChange}
          />
        </td>
      </tr>
      <tr>
        <td>
          <button className="styled-button " onClick={handleSubmit}>
            Submit
          </button>
        </td>
      </tr>
    </table>
  );
}
export default Input;
