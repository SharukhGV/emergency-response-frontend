import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div style={{maxWidth:"600px", margin:"auto", paddingTop:"20px"}} className={`dream-form-container ${accessToken ? '' : 'logged-out'}`}>
      <h2>{initialDream ? 'Edit Dream' : 'Log New Dream'}</h2>
      <p className="dream-intro">Dreams are important. Some say they are influenced by past events while others say they can also denote future ones.</p>
      {accessToken ? (
        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">Dream submitted successfully!</div>}
          <div className="form-group">
            <label htmlFor="title">Title of Dream:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={dream.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={dream.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={dream.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkbox-group">
            <label htmlFor="isDayDream">Day Dream:</label>
            <input
              type="checkbox"
              id="isDayDream"
              name="isDayDream"
              checked={dream.isDayDream}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            {initialDream ? 'Update Dream' : 'Log Dream'}
          </button>
        </form>
      ) : (
        <p className="login-message">Please log in to create or edit dreams.</p>
      )}
    </div>
  );
};

export default DreamNewForm;