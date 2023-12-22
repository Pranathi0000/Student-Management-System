import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteStudent = () => {
  const { rollNum } = useParams();
  const [student, setStudent] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [recordNotFound, setRecordNotFound] = useState(false);

  useEffect(() => {
    // Fetch the student details
    axios.get(`http://localhost:8080/studentdetails/${rollNum}`)
      .then(response => {
        if(response.data==='')
        {
          setRecordNotFound(true);
        }
        setStudent(response.data); // Set student data to state
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
        setRecordNotFound(true); // Set state if record is not found
      });
  }, [rollNum]);

  const deleteStudent = () => {
    axios.delete(`http://localhost:8080/deletedetails/${rollNum}`)
      .then(response => {
        console.log('Student deleted successfully');
        setDeleted(true); // Set state to indicate successful deletion
      })
      .catch(error => {
        console.error('Error deleting student:', error);
      });
  };

  if (recordNotFound) {
    return (
      <div className="form-container">
        <p>Record not available</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      {student && (
        <div>
          <h2>Student Details</h2>
          <p><strong>Roll Number:</strong> {student.rollNum}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Class:</strong> {student.cls}</p>
          <p><strong>CGPA:</strong> {student.cgpa}</p>
          <p><strong>Fee:</strong> {student.fee}</p>
        </div>
      )}
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete this student?</p>
      {!deleted ? (
        <button onClick={deleteStudent} className="delete-btn">Delete</button>
      ) : (
        <p>Deleted</p>
      )}
    </div>
  );
};

export default DeleteStudent;
