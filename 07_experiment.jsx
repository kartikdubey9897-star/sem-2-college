import React from 'react';
function StudentCard({ name, course, marks }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}>Course: {course}</p>
      <p style={styles.detail}>Marks: {marks}</p>
    </div>
  );
};
export default function App() {
  const students = [
    { id: 1, name: 'Rahul Sharma', course: 'Computer Science', marks: 85 },
    { id: 2, name: 'Anita Verma', course: 'Information Technology', marks: 92 },
    { id: 3, name: 'Rohan Gupta', course: 'Electronics', marks: 78 }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Information</h1>
      
      <div style={styles.listContainer}>
        {students.map((student) => (
          <StudentCard 
            key={student.id}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: '#f3f3f3', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 15px',
    fontFamily: '"Helvetica Neue", Arial, sans-serif'
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '0 0 20px 0',
    textAlign: 'center'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
    width: '100%',
    maxWidth: '320px' 
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '24px 20px',
    borderRadius: '14px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
    textAlign: 'center',
    border: '1px solid #e2e2e2'
  },
  name: {
    fontSize: '22px',
    color: '#0c4a75', 
    margin: '0 0 14px 0',
    fontWeight: 'bold'
  },
  detail: {
    fontSize: '14px',
    color: '#000000',
    margin: '8px 0',
    fontWeight: '500'
  }
};