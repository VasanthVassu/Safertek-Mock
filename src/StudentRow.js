import React, { useState } from 'react';

const StudentRow = ({ student, setStudents }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleDetailsClick = () => {
    // Open details modal or pop-up
  };

  return (
    <tr
      onClick={handleClick}
      style={{
        backgroundColor: isSelected ? 'lightgray' : 'white',
        fontWeight: isSelected ? 'bold' : 'normal',
        textTransform: isSelected ? 'uppercase' : 'none',
      }}
    >
      <td>{student.name}</td>
      {/* Add other student data columns */}
      <td>
        <button onClick={handleDetailsClick}>Details</button>
      </td>
    </tr>
  );
};

export default StudentRow;