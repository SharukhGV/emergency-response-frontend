import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./dreams.css"

const DreamIndex = () => {
  const [dreams, setDreams] = useState([]);
  const [filteredDreams, setFilteredDreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dreamType, setDreamType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [dreamsPerPage] = useState(10);
  // const [theme, setTheme] = useState('light');

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

    // // Check user's preferred color scheme
    // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    // setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    // const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
    // prefersDarkScheme.addListener(handleChange);

    // return () => prefersDarkScheme.removeListener(handleChange);
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

  return (<>
  <br></br>
    <div className="dream-index-container">
      <h1 className="dream-index-title">Public Dream Log</h1>
  
      <div className="dream-filters">
        <input
          type="text"
          placeholder="Search dreams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="dream-input"
        />
        <select
          value={dreamType}
          onChange={(e) => setDreamType(e.target.value)}
          className="dream-select"
        >
          <option value="all">All Dreams</option>
          <option value="day">Day Dreams</option>
          <option value="night">Night Dreams</option>
        </select>
      </div>
  
      <div className="dream-list">
        {currentDreams.map((dream) => (
          <div key={dream.id} className="dream-item">
            <h2 className="dream-title">{dream.title}</h2>
            <p className="dream-date">
              {new Date(dream.date).toLocaleDateString()} - {dream.isDayDream ? 'Day Dream' : 'Night Dream'}
            </p>
            <p className="dream-description">
              {dream.description.substring(0, 100)}...
            </p>
            <Link to={`/dreams/${dream.id}`} className="view-details-button">
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
      />
    </div></>
  );}
  
  const Pagination = ({ dreamsPerPage, totalDreams, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalDreams / dreamsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="pagination-item">
              <button
                onClick={() => paginate(number)}
                className={`pagination-button ${currentPage === number ? 'active' : ''}`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  



export default DreamIndex;