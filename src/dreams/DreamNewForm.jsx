import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "./dreams.css"

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
  // const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   // Check user's preferred color scheme
  //   const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  //   setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

  //   const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
  //   prefersDarkScheme.addEventListener('change', handleChange);

  //   return () => prefersDarkScheme.removeEventListener('change', handleChange);
  // }, []);
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
    <div className="dream-container">
      <h2 className="dream-title">{initialDream ? 'Edit Dream' : 'Log New Dream'}</h2>
      <p className="dream-intro">
        Everyone has dreams. While we each navigate our own unique lives, we share a common environment that shapes us all, to varying degrees. Our individual experiences may differ, but the themes in our collective dream experiences can reveal deeper insights into the state of the world, reflecting both our direct and indirect impact on it.
      </p>
      {accessToken ? (
        <form onSubmit={handleSubmit} className="dream-form">
          {error && <div className="dream-error">{error}</div>}
          {success && <div className="dream-success">Dream submitted successfully!</div>}
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title of Dream:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={dream.title}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description:</label>
            <textarea
              id="description"
              name="description"
              value={dream.description}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={dream.date}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="isDayDream" className="checkbox-label">
              <input
                type="checkbox"
                id="isDayDream"
                name="isDayDream"
                checked={dream.isDayDream}
                onChange={handleChange}
                className="form-checkbox"
              />
           Did you dream during the day? (Day Dream)
           </label>
          </div>
          <button type="submit" className="form-button">
            {initialDream ? 'Update Dream' : 'Log Dream'}
          </button>
        </form>
      ) : (
        <p className="login-message">Please log in to create or edit dreams.</p>
      )}
      <Link to="/dreams" className="back-button">Back to Dreams</Link>
    </div>
  );
  
};



export default DreamNewForm;