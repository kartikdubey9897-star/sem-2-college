import React, { useState } from 'react';

export default function App() {
  
  const [count, setCount] = useState(0);

  
  const handleIncrement = () => {
    setCount(count + 1);
  };

  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>React Counter<br />Application</h1>
        
        {}
        <div style={styles.counterValue}>{count}</div>
        
        {}
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={handleIncrement}>
            Increment (+)
          </button>
          <button style={styles.button} onClick={handleDecrement}>
            Decrement (-)
          </button>
        </div>
        
        <div style={styles.resetRow}>
          <button style={styles.button} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    backgroundColor: '#f3f3f3',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: '20px'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '380px'
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '0 0 20px 0',
    lineHeight: '1.2'
  },
  counterValue: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '20px 0'
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '15px'
  },
  resetRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    outline: 'none'
  }
};
