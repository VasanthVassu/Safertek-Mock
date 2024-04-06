// import React from 'react';

// const StatisticsBlock = ({ students }) => {
//   const calculateStats = () => {
//     // Calculate statistics based on student data
//     const gradeDistribution = {};
//     let totalGrades = 0;
//     let maxGrade = 0;
//     let minGrade = Infinity;

//     students.forEach((student) => {
//       const grade = student.finalGrade;
//       gradeDistribution[grade] = (gradeDistribution[grade] || 0) + 1;
//       totalGrades += grade;
//       maxGrade = Math.max(maxGrade, grade);
//       minGrade = Math.min(minGrade, grade);
//     });

//     const averageGrade = totalGrades / students.length;

//     return { gradeDistribution, averageGrade, maxGrade, minGrade };
//   };

//   const { gradeDistribution, averageGrade, maxGrade, minGrade } = calculateStats();

//   return (
//     <div>
//       <h2>Statistics</h2>
//       <p>Number of students per grade:</p>
//       <ul>
//         {Object.entries(gradeDistribution).map(([grade, count]) => (
//           <li key={grade}>{`${grade}: ${count}`}</li>
//         ))}
//       </ul>
//       <p>Average grade: {averageGrade.toFixed(2)}</p>
//       <p>Maximum grade: {maxGrade}</p>
//       <p>Minimum grade: {minGrade}</p>
//     </div>
//   );
// };

// export default StatisticsBlock;
import React from 'react';

const Statistics = ({ students }) => {
  const totalStudents = students.length;
  const averageGrade = students.reduce((acc, student) => acc + (0.6 * student.examGrade + 0.4 * student.ratingGrade), 0) / totalStudents;
  const maximalGrade = Math.max(...students.map(student => 0.6 * student.examGrade + 0.4 * student.ratingGrade));
  const minimalGrade = Math.min(...students.map(student => 0.6 * student.examGrade + 0.4 * student.ratingGrade));

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Average Grade: {averageGrade}</p>
      <p>Maximal Grade: {maximalGrade}</p>
      <p>Minimal Grade: {minimalGrade}</p>
    </div>
  );
};

export default Statistics;
