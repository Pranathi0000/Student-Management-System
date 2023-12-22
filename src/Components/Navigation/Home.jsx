
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

const Home = () => {
  return (
    <div className='container'>
      <h1>Welcome to Student Management System</h1>
      <Link to="/delete/" className="button-style">Delete Student</Link>
      <Link to="/add" className="button-style">Create Student</Link>
      <Link to="/update" className="button-style">Update Student</Link>
      <Link to="/display" className="button-style">Details of all Students</Link>
      <Link to="/get/" className="button-style">Get Details of one student</Link>
    </div>
  );
};

export default Home;
