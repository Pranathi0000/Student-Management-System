import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const GetRolNumber = () => {
  const [rollNum, setRollNum] = useState('');
  const history = useNavigate();

  const handleGetDetails = () => {
    if (rollNum.trim() !== '') {
      history(`/delete/${rollNum}`); // Redirect to view student details page with rollNum in URL
    } else {
      console.log('Please enter a valid roll number');
      // Display an error message or handle the case where the rollNum is empty
    }
  };

  return (
    <div className='container'>
      <h1>Student Roll Number</h1>
      <input
        type="text"
        value={rollNum}
        onChange={(e) => setRollNum(e.target.value)}
        placeholder="Enter Roll Number"
      />
      <button onClick={handleGetDetails}>Get Details</button>
      {/* Other components */}
    </div>
  );
};

export default GetRolNumber;
