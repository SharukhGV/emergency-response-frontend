import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const DreamNewForm = ({ initialDream = null, accessToken, loginUsername }) => {
  const navigate = useNavigate();
  const [dream, setDream] = useState(initialDream || {
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    isDayDream: false,
    username: loginUsername,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    prefersDarkScheme.addEventListener('change', handleChange);

    return () => prefersDarkScheme.removeEventListener('change', handleChange);
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDream(prevDream => ({
      ...prevDream,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      if (initialDream) {
        await axios.put(`${import.meta.env.VITE_BACKEND_API}/dreams/${initialDream.id}`, dream, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_API}/dreams`, dream, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      }

      setSuccess(true);

      if (!initialDream) {
        setDream({
          title: '',
          description: '',
          date: new Date().toISOString().split('T')[0],
          isDayDream: false,
          username: loginUsername,
        });
      }

      setTimeout(() => {
        navigate('/dreams');
      }, 2000);

    } catch (error) {
      console.error('Error submitting dream:', error);
      setError('Failed to submit dream. Please try again.');
    }
  };

  return (
    <div style={styles.container(theme)}>
      <h2 style={styles.title(theme)}>{initialDream ? 'Edit Dream' : 'Log New Dream'}</h2>
      <p style={styles.intro(theme)}>This application aims to address the problem of environmental destruction and societal ignorance by raising awareness through symbolic representations of astronomical, biological, and geologic anomalies in dreams, encouraging users to reflect on human behaviors that contribute to these issues and inspiring action to prevent or prepare for potential apocalyptic scenarios.</p>
      {accessToken ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          {error && <div style={styles.error(theme)}>{error}</div>}
          {success && <div style={styles.success(theme)}>Dream submitted successfully!</div>}
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label(theme)}>Title of Dream:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={dream.title}
              onChange={handleChange}
              required
              style={styles.input(theme)}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description" style={styles.label(theme)}>Description:</label>
            <textarea
              id="description"
              name="description"
              value={dream.description}
              onChange={handleChange}
              required
              style={styles.textarea(theme)}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="date" style={styles.label(theme)}>Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={dream.date}
              onChange={handleChange}
              required
              style={styles.input(theme)}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="isDayDream" style={styles.checkboxLabel(theme)}>
              <input
                type="checkbox"
                id="isDayDream"
                name="isDayDream"
                checked={dream.isDayDream}
                onChange={handleChange}
                style={styles.checkbox}
              />
              Day Dream
            </label>
          </div>
          <button type="submit" style={styles.button(theme)}>
            {initialDream ? 'Update Dream' : 'Log Dream'}
          </button>
        </form>
      ) : (
        <p style={styles.loginMessage(theme)}>Please log in to create or edit dreams.</p>
      )}
      <Link to="/dreams" style={styles.backButton(theme)}>Back to Dreams</Link>
    </div>
  );
};

const styles = {
  container: (theme) => ({
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#2c2c2c',
    color: theme === 'light' ? '#333' : '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }),
  title: (theme) => ({
    color: theme === 'light' ? '#3a3a85' : '#74c0fc',
    textAlign: 'center',
    marginBottom: '20px',
  }),
  intro: (theme) => ({
    marginBottom: '20px',
    lineHeight: '1.6',
    color: theme === 'light' ? '#555' : '#ccc',
  }),
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: (theme) => ({
    display: 'block',
    marginBottom: '5px',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  input: (theme) => ({
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
    backgroundColor: theme === 'light' ? '#fff' : '#3c3c3c',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  textarea: (theme) => ({
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
    backgroundColor: theme === 'light' ? '#fff' : '#3c3c3c',
    color: theme === 'light' ? '#333' : '#fff',
    minHeight: '100px',
  }),
  checkboxLabel: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  checkbox: {
    marginRight: '10px',
  },
  button: (theme) => ({
    padding: '10px 15px',
    backgroundColor: theme === 'light' ? '#3a3a85' : '#74c0fc',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  }),
  backButton: (theme) => ({
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 15px',
    backgroundColor: theme === 'light' ? '#4caf50' : '#45a049',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  }),
  error: (theme) => ({
    color: theme === 'light' ? '#d32f2f' : '#f44336',
    marginBottom: '15px',
  }),
  success: (theme) => ({
    color: theme === 'light' ? '#4caf50' : '#81c784',
    marginBottom: '15px',
  }),
  loginMessage: (theme) => ({
    color: theme === 'light' ? '#333' : '#fff',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  }),
};

export default DreamNewForm;