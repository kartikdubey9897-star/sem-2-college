import React, { useState, useEffect } from 'react';

export default function App() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 
    setStatusMessage('Sending data to API...');
  };

  
  useEffect(() => {
    
    if (!isSubmitting) return;

    
    const apiURL = 'https://typicode.com';

    fetch(apiURL, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data); 
        setStatusMessage('Success! Data registered successfully.');
        setIsSubmitting(false); 
        
        
        setFormData({ name: '', email: '', password: '' }); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatusMessage('Something went wrong. Please try again.');
        setIsSubmitting(false);
      });

  }, [isSubmitting]); 

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h1 style={styles.heading}>Registration Form</h1>
        
        {/* Name Input */}
        <input 
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {}
        <input 
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {}
        <input 
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {}
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Please wait...' : 'Register'}
        </button>

        {}
        {statusMessage && <p style={styles.status}>{statusMessage}</p>}
      </form>
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
    maxWidth: '380px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#000000',
    margin: '0 0 25px 0'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    margin: '10px 0',
    fontSize: '14px',
    border: '1px solid #999',
    borderRadius: '0px', 
    boxSizing: 'border-box',
    outline: 'none',
    color: '#333'
  },
  button: {
    backgroundColor: '#008000', 
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '15px',
    width: 'fit-content'
  },
  status: {
    fontSize: '12px',
    marginTop: '15px',
    color: '#555',
    fontWeight: '500'
  }
};
