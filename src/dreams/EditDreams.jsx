import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import "./dreams.css"
function EditDreams() {
  const [dream, setDream] = useState({
    title: '',
    description: '',
    date: '',
    isDayDream: false
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchDream = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/dreams/${id}`);
        const dreamData = response.data.data;
        setDream({
          title: dreamData.title,
          description: dreamData.description,
          date: new Date(dreamData.date).toISOString().split('T')[0],
          isDayDream: Boolean(dreamData.isDayDream)
        });
      } catch (error) {
        console.error('Error fetching dream:', error);
        setError('Failed to fetch dream');
      } finally {
        setLoading(false);
      }
    };
    fetchDream();

  //   // Check user's preferred color scheme
  //   const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  //   setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

  //   const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
  //   prefersDarkScheme.addEventListener('change', handleChange);

  //   return () => prefersDarkScheme.removeEventListener('change', handleChange);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDream(prevDream => ({
      ...prevDream,
      [name]: type === 'checkbox' ? Boolean(checked) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedDream = {
        title: dream.title.trim(),
        description: dream.description.trim(),
        date: dream.date,
        isDayDream: Boolean(dream.isDayDream)
      };
      console.log('Sending data:', updatedDream);
      await axios.put(`${import.meta.env.VITE_BACKEND_API}/dreams/${id}`, updatedDream);
      navigate(`/dreams/${id}`);
    } catch (error) {
      console.error('Error updating dream:', error.response?.data || error.message);
      setError('Failed to update dream');
    }
  };

  // if (loading) return <div style={styles.loading(theme)}>Loading...</div>;
  // if (error) return <div style={styles.error(theme)}>{error}</div>;


  const textareaRef = useRef(null);

  // Automatically adjust textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [dream.description]); // Re-runs when "description" value changes

  return (
    <div className="container">
      <h2 className="title">Edit Dream</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title" className="label">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={dream.title}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
      <label htmlFor="description" className="label">Description:</label>
      <textarea
        id="description"
        name="description"
        value={dream.description}
        onChange={handleChange}
        required
        className="textarea"
        ref={textareaRef} // Attach the ref for dynamic height adjustment
        placeholder="Write your dream description here..."
      />
    </div>
        <div className="form-group">
          <label htmlFor="date" className="label">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={dream.date}
            onChange={handleChange}
            required
            className="input"
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
              className="checkbox"
            />
           Did you dream during the day? (Day Dream)
          </label>
        </div>
        <button type="submit" className="button">Update Dream</button>
      </form>
      <Link to={`/dreams/${id}`} className="back-button">Back to Dream</Link>
    </div>
  );
  
}



export default EditDreams;