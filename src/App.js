import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './components/App.css';
import StatisticsBlock from './components/StatisticsBlock';
import Main from './components/main'
const initialStudents = [
  // Initial mocked student data
];

const students1 = [
  { id: 1, name: 'teja', ticketNumber: 'T001', ratingGrade: 4.6, examGrade: 3.5, comments: 'Good effort' },
  { id: 2, name: 'rajendra', ticketNumber: 'R002', ratingGrade: 3.8, examGrade: 4.2, comments: 'Excellent work' },
  { id: 3, name: 'rakesh', ticketNumber: 'R003', ratingGrade: 4.0, examGrade: 3.9, comments: 'Needs improvement' },
  { id: 4, name: 'lohitha', ticketNumber: 'L004', ratingGrade: 3.2, examGrade: 4.6, comments: 'Outstanding performance' },
  { id: 5, name: 'manoj', ticketNumber: 'M005', ratingGrade: 4.7, examGrade: 3.4, comments: 'Satisfactory' },
  { id: 6, name: 'kishore', ticketNumber: 'K006', ratingGrade: 4.5, examGrade: 3.7, comments: 'Average' },
  { id: 7, name: 'sarath', ticketNumber: 'S007', ratingGrade: 4.2, examGrade: 4.0, comments: 'Great job' },
  { id: 8, name: 'vishnu', ticketNumber: 'V008', ratingGrade: 4.6, examGrade: 4.5, comments: 'Impressive' },
  { id: 9, name: 'rajgopal', ticketNumber: 'R009', ratingGrade: 4.1, examGrade: 3.8, comments: 'Well done' },
  { id: 10, name: 'meghana', ticketNumber: 'M010', ratingGrade: 4.3, examGrade: 4.1, comments: 'Keep it up' },
  { id: 11, name: 'pavan', ticketNumber: 'P011', ratingGrade: 3.9, examGrade: 4.3, comments: 'Needs more practice' },
  { id: 12, name: 'eswar', ticketNumber: 'E012', ratingGrade: 4.4, examGrade: 4.2, comments: 'Excellent performance' }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };
  const examInfo = {
    title: 'Final Exam',
    date: 'March 15, 2024',
    professor: 'Dr. Pavan Kumar Ande',
    college: 'Engineering',
    department: 'Computer Science',
    semester: 'Spring 2024',
    group: 'Group A',
  };
  return (
    <div>
      <Header examInfo={examInfo} />
      <Main students={students1}/>
      
      <Footer />
    </div>
  );
}

export default App;