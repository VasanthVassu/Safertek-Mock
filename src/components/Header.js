import React from 'react';

const Header = ({ examInfo }) => {
  return (
    <header>
      <h1>Gradebook</h1>
      <div>
        <h2>Exam Information</h2>
        <p>Title: {examInfo.title}</p>
        <p>Date: {examInfo.date}</p>
        <p>Professor's Name: {examInfo.professor}</p>
        <p>College: {examInfo.college}</p>
        <p>Department: {examInfo.department}</p>
        <p>Semester: {examInfo.semester}</p>
        <p>Group: {examInfo.group}</p>
        {/* Add additional exam information here */}
      </div>
    </header>
  );
};

export default Header;