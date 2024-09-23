import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DreamIndex = () => {
  const [dreams, setDreams] = useState([]);
  const [filteredDreams, setFilteredDreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dreamType, setDreamType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [dreamsPerPage] = useState(10);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchDreams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/dreams`);
        const sortedDreams = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDreams(sortedDreams);
        setFilteredDreams(sortedDreams);
      } catch (error) {
        console.error('Error fetching dreams:', error);
      }
    };

    fetchDreams();

    // Check user's preferred color scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    prefersDarkScheme.addListener(handleChange);

    return () => prefersDarkScheme.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const filtered = dreams.filter(dream => {
      const matchesSearch = dream.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            dream.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = dreamType === 'all' || 
                          (dreamType === 'day' && dream.isDayDream) ||
                          (dreamType === 'night' && !dream.isDayDream);
      return matchesSearch && matchesType;
    });
    setFilteredDreams(filtered);
    setCurrentPage(1);
  }, [searchTerm, dreamType, dreams]);

  // Get current dreams
  const indexOfLastDream = currentPage * dreamsPerPage;
  const indexOfFirstDream = indexOfLastDream - dreamsPerPage;
  const currentDreams = filteredDreams.slice(indexOfFirstDream, indexOfLastDream);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={styles.container(theme)}>
      <h1 style={styles.title(theme)}>Dream Journal</h1>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search dreams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input(theme)}
        />
        <select
          value={dreamType}
          onChange={(e) => setDreamType(e.target.value)}
          style={styles.select(theme)}
        >
          <option value="all">All Dreams</option>
          <option value="day">Day Dreams</option>
          <option value="night">Night Dreams</option>
        </select>
      </div>

      <div style={styles.dreamList}>
        {currentDreams.map((dream) => (
          <div key={dream.id} style={styles.dreamItem(theme)}>
            <h2 style={styles.dreamTitle(theme)}>{dream.title}</h2>
            <p style={styles.dreamDate(theme)}>
              {new Date(dream.date).toLocaleDateString()} - {dream.isDayDream ? 'Day Dream' : 'Night Dream'}
            </p>
            <p style={styles.dreamDescription(theme)}>
              {dream.description.substring(0, 100)}...
            </p>
            <Link to={`/dreams/${dream.id}`} style={styles.viewDetailsButton(theme)}>
              View Details
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        dreamsPerPage={dreamsPerPage}
        totalDreams={filteredDreams.length}
        paginate={paginate}
        currentPage={currentPage}
        theme={theme}
      />
    </div>
  );
};

const Pagination = ({ dreamsPerPage, totalDreams, paginate, currentPage, theme }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDreams / dreamsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} style={styles.paginationItem}>
            <button onClick={() => paginate(number)} style={styles.paginationButton(theme, currentPage === number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  container: (theme) => ({
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    margin: '50px auto',
    textAlign: 'center',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#1a1a1a',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  title: (theme) => ({
    fontSize: '3rem',
    color: theme === 'light' ? '#3a3a85' : '#74c0fc',
    marginBottom: '20px',
  }),
  filters: {
    marginBottom: '30px',
  },
  input: (theme) => ({
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '15px',
    width: '250px',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    backgroundColor: theme === 'light' ? '#fff' : '#3c3c3c',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  select: (theme) => ({
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    backgroundColor: theme === 'light' ? '#fff' : '#3c3c3c',
    color: theme === 'light' ? '#333' : '#fff',
  }),
  dreamList: {
    textAlign: 'left',
  },
  dreamItem: (theme) => ({
    padding: '15px',
    borderBottom: `1px solid ${theme === 'light' ? '#eee' : '#444'}`,
    marginBottom: '10px',
  }),
  dreamTitle: (theme) => ({
    fontSize: '1.5rem',
    color: theme === 'light' ? '#3a3a85' : '#74c0fc',
    marginBottom: '5px',
  }),
  dreamDate: (theme) => ({
    fontSize: '0.9rem',
    color: theme === 'light' ? '#666' : '#ccc',
    marginBottom: '5px',
  }),
  dreamDescription: (theme) => ({
    fontSize: '1rem',
    color: theme === 'light' ? '#333' : '#fff',
    marginBottom: '10px',
  }),
  viewDetailsButton: (theme) => ({
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: theme === 'light' ? '#3a3a85' : '#74c0fc',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '3px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease',
  }),
  pagination: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  paginationItem: {
    margin: '0 5px',
  },
  paginationButton: (theme, isActive) => ({
    padding: '5px 10px',
    border: 'none',
    backgroundColor: isActive 
      ? (theme === 'light' ? '#3a3a85' : '#74c0fc')
      : (theme === 'light' ? '#f0f0f0' : '#3c3c3c'),
    color: isActive ? '#fff' : (theme === 'light' ? '#333' : '#fff'),
    cursor: 'pointer',
    borderRadius: '3px',
    transition: 'background-color 0.3s ease',
  }),
};

export default DreamIndex;