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
    <div
  style={{
    backgroundColor: 'rgba(240, 240, 255, 0.7)',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    // fontFamily: "'Dancing Script', cursive",
    color: '#333',
    maxWidth: '600px',
    margin: '50px auto',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.3s ease-in-out',
  }}
> 
<p>Dreams are important. Some say they are influenced by past events while others say it can also denote future ones</p>
  {accessToken ? (
    <form onSubmit={handleSubmit}>
      {error && (
        <div
          className="error"
          style={{
            // backgroundColor: '#ffdddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            // color: '#d9534f',
          }}
        >
          {error}
        </div>
      )}
      {success && (
        <div
          className="success"
          style={{
            backgroundColor: '#dff0d8',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            color: '#5cb85c',
          }}
        >
          Dream submitted successfully!
        </div>
      )}
      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="title"
          style={{
            display: 'block',
            fontSize: '1.2rem',
            color: '#3a3a85',
            marginBottom: '5px',
          }}
        >
          Title of Dream:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={dream.title}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // fontFamily: "'Dancing Script', cursive",
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
          onBlur={(e) => (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="description"
          style={{
            display: 'block',
            fontSize: '1.2rem',
            color: '#3a3a85',
            marginBottom: '5px',
          }}
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={dream.description}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            width: '100%',
            height: '100px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // fontFamily: "'Dancing Script', cursive",
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
          onBlur={(e) => (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="date"
          style={{
            display: 'block',
            fontSize: '1.2rem',
            color: '#3a3a85',
            marginBottom: '5px',
          }}
        >
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={dream.date}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            // fontFamily: "'Dancing Script', cursive",
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
          onBlur={(e) => (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="isDayDream"
          style={{
            fontSize: '1.2rem',
            color: '#3a3a85',
            marginRight: '10px',
          }}
        >
          Day Dream?
        </label>
        <input
          type="checkbox"
          id="isDayDream"
          name="isDayDream"
          checked={dream.isDayDream}
          onChange={handleChange}
          style={{
            transform: 'scale(1.2)',
            verticalAlign: 'middle',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#3a3a85',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#5050a3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#3a3a85')}
      >
        {initialDream ? 'Update Dream' : 'Log Dream'}
      </button>
    </form>
  ) : (
    <p>Please log in to create or edit dreams.</p>
  )}
</div>

  );
};

export default DreamNewForm;