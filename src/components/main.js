import React, { useState } from "react";
import Statistics from './StatisticsBlock';
import Footer from "./Footer";
const Gradebook = ({ students }) => {
    const [showStatistics, setShowStatistics] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortOrderf, setSortOrderf] = useState('asc');
    const [filter, setFilter] = useState('all');

    const handleRowClick = (student) => {
        setSelectedStudent(student);
    };

    const toggleStatistics = () => {
        setShowStatistics(!showStatistics);
    };

    const sortStudents = (students) => {
        return students.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    };
    const filterStudents = (students) => {
        return students.filter(student => {
            if (filter === 'all') {
                return true;
            } else if (filter.toLowerCase() === 'passed') {
                return (0.6 * student.examGrade + 0.4 * student.ratingGrade) > 4;
            } else {
                return (0.6 * student.examGrade + 0.4 * student.ratingGrade) <= 4;
            }
        });
    };
    const sortStudentsf = (students) => {
        return students.sort((a, b) => {
            const finalGradeA = 0.6 * a.examGrade + 0.4 * a.ratingGrade;
            const finalGradeB = 0.6 * b.examGrade + 0.4 * b.ratingGrade;

            if (sortOrderf === 'asc') {
                return finalGradeA - finalGradeB;
            } else {
                return finalGradeB - finalGradeA;
            }
        });
    };

    const sortedStudents = sortStudents(students);
    const sortedStudentsf = sortStudentsf(sortedStudents);
    const filteredStudents = filterStudents(sortedStudentsf);

    return (
        <div>

            <main>
                <div>
                    <label>
                        Sort by name:
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </label>
                    <label>
                        Filter by status:
                        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="all">All</option>
                            <option value="Passed">Passed</option>
                            <option value="Failed">Failed</option>
                        </select>
                    </label>
                    <label>
                        Filter by final grade:
                        <select value={sortOrderf} onChange={(e) => setSortOrderf(e.target.value)}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </label>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Ticket's Number</th>
                            <th>Rating Grade</th>
                            <th>Exam Grade</th>
                            <th>Final Grade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={student.id} onClick={() => handleRowClick(student)}>
                                <td>{index + 1}</td>
                                <td style={{ textTransform: selectedStudent === student ? 'uppercase' : 'none' }}>{student.name}</td>
                                <td>{student.ticketNumber}</td>
                                <td>{student.ratingGrade}</td>
                                <td>{student.examGrade}</td>
                                <td>{0.6 * student.examGrade + 0.4 * student.ratingGrade}</td>
                                <td>{(0.6 * student.examGrade + 0.4 * student.ratingGrade) > 4 ? 'Passed' : 'Failed'}</td>
                                <td>
                                    {selectedStudent === student && (
                                        <div>
                                            <p>Comments: {student.comments}</p>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={toggleStatistics}>{showStatistics ? 'Hide' : 'Show'} Statistics</button>
                {showStatistics && <Statistics students={students} />} {/* Use the Statistics component */}

            </main>

        </div>
    );
};

export default Gradebook;