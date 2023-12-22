import React,{useState} from 'react';
import axios from 'axios';
import './Styles.css';

export default function CreateStudent() {

  const initialStudentData = {
    name: '',
    cls: '',
    cgpa: '',
    fee: '',
  };
   const [studentData,setStudentData]=useState(initialStudentData);

   const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/insertdetails', studentData)
      .then(response => {
        console.log('Student created:', response.data);
        setStudentData(initialStudentData);
      })
      .catch(error => {
        console.error('Error creating student: ', error);
      });
  };

  return (
    <div>
      <center><h2>Create Student Record</h2></center>
      <form className="form-container" onSubmit={handleSubmit}>
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
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
