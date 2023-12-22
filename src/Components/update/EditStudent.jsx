import React, { useState } from 'react';
import axios from 'axios';
import './Styles.css'

function EditStudent() {

    const initialStudentData={
        rollNum: '',
    name: '',
    cls: '',
    cgpa: '',
    fee: '',
    };
  const [studentData, setStudentData] = useState(initialStudentData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8080/updatedetails', studentData)
      .then(response => {
        console.log('Student updated:', response.data);
        setStudentData(initialStudentData);
        // Optionally, perform any necessary actions upon successful update
      })
      .catch(error => {
        console.error('Error updating student: ', error);
      });
  };

  return (
    <div className="form-container">
      <center><h2>Edit Student Record</h2></center>
      <form onSubmit={handleSubmit}>
        <label>
          Roll Number:
          <input
            type="text"
            name="rollNum"
            value={studentData.rollNum}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={studentData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="cls"
            value={studentData.cls}
            onChange={handleChange}
          />
        </label>
        <label>
          CGPA:
          <input
            type="text"
            name="cgpa"
            value={studentData.cgpa}
            onChange={handleChange}
          />
        </label>
        <label>
          Fee:
          <input
            type="text"
            name="fee"
            value={studentData.fee}
            onChange={handleChange}
          />
        </label>
        {/* Add other input fields for additional student details */}
        <button type="submit" className="submit-btn">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
