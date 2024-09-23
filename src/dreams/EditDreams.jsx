import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
  const [theme, setTheme] = useState('light');

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

    // Check user's preferred color scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    prefersDarkScheme.addEventListener('change', handleChange);

    return () => prefersDarkScheme.removeEventListener('change', handleChange);
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

  if (loading) return <div style={styles.loading(theme)}>Loading...</div>;
  if (error) return <div style={styles.error(theme)}>{error}</div>;

  return (
    <div style={styles.container(theme)}>
      <h2 style={styles.title(theme)}>Edit Dream</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label(theme)}>Title:</label>
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
        <button type="submit" style={styles.button(theme)}>Update Dream</button>
      </form>
      <Link to={`/dreams/${id}`} style={styles.backButton(theme)}>Back to Dream</Link>
    </div>
  );
}

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
  loading: (theme) => ({
    color: theme === 'light' ? '#333' : '#fff',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  }),
  error: (theme) => ({
    color: theme === 'light' ? '#d32f2f' : '#f44336',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  }),
};

export default EditDreams;