import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Styles.css';

const DisplayStudent = () => {
  const { rollNum } = useParams();
  const [student, setStudent] = useState(null);
  const [recordNotFound, setRecordNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8080/studentdetails/${rollNum}`) // Replace with your endpoint
      .then(response => {
        console.log('Student data:', response.data);
        if(response.data==='')
        {
          setRecordNotFound(true);
        }
        setStudent(response.data); // Set student data to state
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
        setRecordNotFound(true);
      });
  }, [rollNum]);

  if (recordNotFound) {
    return (
      <div className="form-container">
        <p>Record not available</p>
      </div>
    );
  }

  return (
    <div className="student-details">
      {student ? (
        <div>
          <h2>Student Details</h2>
          <p><strong>Roll Number:      </strong> {student.rollNum}</p>
          <hr/>
          <p><strong>Name:</strong> {student.name}</p>
          <hr/>
          <p><strong>Class:</strong> {student.cls}</p>
          <hr/>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
          <hr/>
          <p><strong>Fee:</strong> {student.fee}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DisplayStudent;
