import React, { useState } from 'react';
import Footer2 from '../Footer/Footer2'; 
import "./Career.css";

const Career= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const positions = [
    'Server',
    'Cook',
    'Bartender',
    'Host/Hostess',
    'Dishwasher',
  ];

  const handlePositionChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    if (selectedOptions.length <= 3) {
      setSelectedPositions(selectedOptions);
      setErrorMessage('');
    } else {
      setErrorMessage('You can select up to three positions.');
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    alert("Thank You, Your Application is Successfully Submitted!")
    // if (selectedPositions.length > 0) {
    //   console.log('Name:', name);
    //   console.log('Email:', email);
    //   console.log('Mobile:', mobile);
    //   console.log('i have completed my site')
    //   console.log('Selected Positions:', selectedPositions);
    // } else {
    //   setErrorMessage('Please select at least one position.');
    // }
  };

  return (
    <>
   
    <div className='env'>


     <div className="application-form" style={{top:"80px" ,position:'relative'}}> 
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className='inp-style'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className='inp-style'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input className='inp-style'
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="positions">Preferred Positions (up to 3)</label>
          <select
            id="positions"
            multiple
            value={selectedPositions}
            onChange={handlePositionChange}
            required
          >
            {positions.map((position) => (
               <option key={position} value={position}>
                {position}
              </option>
            ))}

          </select>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button  className=
        "bel" type="submit">Submit Application</button>
      </form>
    </div>
    </div>
   <Footer2/>
    </>
  );
};

export default Career;
