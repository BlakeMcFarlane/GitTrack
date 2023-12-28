import React from 'react'
import '../styling/navbar.css'
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSearch(inputText);
    console.log("submit")
  };

  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <form className='search-user' onSubmit={handleSubmit}>
          <input
            className='nav-input'
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="search user"
          />
          <button type='submit' >
            <p>submit</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
