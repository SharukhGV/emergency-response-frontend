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
        // Edit existing dream
        await axios.put(`${import.meta.env.VITE_BACKEND_API}/dreams/${initialDream.id}`, dream, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      } else {
        // Create new dream
        await axios.post(`${import.meta.env.VITE_BACKEND_API}/dreams`, dream, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
      }

      setSuccess(true);

      if (!initialDream) {
        // Clear form after successful submission of a new dream
        setDream({
          title: '',
          description: '',
          date: new Date().toISOString().split('T')[0],
          isDayDream: false,
          username: loginUsername,
        });
      }

      // Navigate to the dreams list page after a short delay
      setTimeout(() => {
        navigate('/dreams');
      }, 2000);

    } catch (error) {
      console.error('Error submitting dream:', error);
      setError('Failed to submit dream. Please try again.');
    }
  };

  return (
    <div>
      {accessToken ? (
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">Dream submitted successfully!</div>}
          <div>
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
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={dream.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
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
          <div>
            <label htmlFor="isDayDream">Day Dream?</label>
            <input
              type="checkbox"
              id="isDayDream"
              name="isDayDream"
              checked={dream.isDayDream}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{initialDream ? 'Update Dream' : 'Log Dream'}</button>
        </form>
      ) : (
        <p>Please log in to create or edit dreams.</p>
      )}
    </div>
  );
};

export default DreamNewForm;