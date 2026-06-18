import React, { useState, useEffect } from 'react';

export default function App() {
  // 1. Form ke data ko track karne ke liye state banayi
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // 2. API ke response aur loading status ko track karne ke liye state
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 3. Input fields ke badalye hue data ko save karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 4. Form submit hone par chalne wala function
  const handleSubmit = (e) => {
    e.preventDefault(); // Page ko reload hone se rokne ke liye
    setIsSubmitting(true); // Loading chalu
    setStatusMessage('Sending data to API...');
  };

  // 5. useEffect Hook: Jab isSubmitting true hoga, tab yeh API call karega
  useEffect(() => {
    // Agar submit button nahi daba hai, toh API call mat karo
    if (!isSubmitting) return;

    // Ek nakli (mock) API URL jahan hum data bhej rahe hain
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
        console.log('API Response:', data); // Console me data dekhne ke liye
        setStatusMessage('Success! Data registered successfully.');
        setIsSubmitting(false); // Loading band
        
        // Form ko khali karne ke liye
        setFormData({ name: '', email: '', password: '' }); 
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatusMessage('Something went wrong. Please try again.');
        setIsSubmitting(false);
      });

  }, [isSubmitting]); // Yeh useEffect tabhi chalega jab isSubmitting ki value badlegi

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

        {/* Email Input */}
        <input 
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Password Input */}
        <input 
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />

        {/* Register Button */}
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Please wait...' : 'Register'}
        </button>

        {/* API Response Status Dikhane Ke Liye */}
        {statusMessage && <p style={styles.status}>{statusMessage}</p>}
      </form>
    </div>
  );
}

// =========================================================
// EXACT CSS STYLING OBJECTS (Photo Jaisa Dikhne Ke Liye)
// =========================================================
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
    borderRadius: '0px', // Photo me flat corners hain
    boxSizing: 'border-box',
    outline: 'none',
    color: '#333'
  },
  button: {
    backgroundColor: '#008000', // Green Color
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
