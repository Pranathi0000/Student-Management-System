import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Styles.css';

export default function DisplayStudents() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
      // Fetching students data from an API endpoint
      axios.get('http://localhost:8080/studentdetails')
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          console.error('Error fetching students: ', error);
        });
    }, []);
  
    return (
      <div className="display-students">
        <center><h2>Student Information</h2></center>
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>CGPA</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.rollNum}>
                <td>{student.rollNum}</td>
                <td>{student.name}</td>
                <td>{student.cls}</td>
                <td>{student.cgpa}</td>
                <td>{student.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}