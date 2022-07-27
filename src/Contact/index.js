import React, {useState} from 'react'

import { validateEmail } from '../utils/helpers';

function Contact () {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setErrorMessage('');

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Valid email required.')
      
    } else {
      setErrorMessage('Thanks, talk soon!')
      return;
    }
    setMessage('');
    setEmail('');
  };

  return (
    <div className= "container">
      <h1>Let's chat.</h1>
      <form className="form">
        <input
          className="form-control mb-3"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
        className="form-control mb-3"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="what's on your mind?"
          required
        />
        <button className="btn btn-success" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
export default Contact