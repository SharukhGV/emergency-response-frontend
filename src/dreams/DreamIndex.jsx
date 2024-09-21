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
    <div className="dream-index" style={{
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Roboto', Lato",
      maxWidth: '900px',
      margin: '50px auto',
      textAlign: 'center',
      backdropFilter: 'blur(5px)',
      transition: 'all 0.3s ease-in-out',
    }}>
      <h1 style={{ fontSize: '3rem', color: '#3a3a85', marginBottom: '20px' }}>Dream Journal</h1>

      <div className="filters" style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Search dreams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '15px',
            width: '250px',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
          }}
        />
        <select
          value={dreamType}
          onChange={(e) => setDreamType(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <option value="all">All Dreams</option>
          <option value="day">Day Dreams</option>
          <option value="night">Night Dreams</option>
        </select>
      </div>

      <div className="dream-list" style={{ textAlign: 'left' }}>
        {currentDreams.map((dream) => (
          <div key={dream.id} className="dream-item" style={{
            padding: '15px',
            borderBottom: '1px solid #eee',
            marginBottom: '10px',
          }}>
            <h2 style={{ fontSize: '1.5rem', color: '#3a3a85', marginBottom: '5px' }}>{dream.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>
              {new Date(dream.date).toLocaleDateString()} - {dream.isDayDream ? 'Day Dream' : 'Night Dream'}
            </p>
            <p style={{ fontSize: '1rem', color: '#333', marginBottom: '10px' }}>
              {dream.description.substring(0, 100)}...
            </p>
            <Link
              to={`/dreams/${dream.id}`}
              style={{
                display: 'inline-block',
                padding: '5px 10px',
                backgroundColor: '#3a3a85',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '3px',
                fontSize: '0.9rem',
              }}
            >
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
    </div>
  );
};

const Pagination = ({ dreamsPerPage, totalDreams, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDreams / dreamsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination' style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {pageNumbers.map(number => (
          <li key={number} style={{ margin: '0 5px' }}>
            <button onClick={() => paginate(number)} style={{
              padding: '5px 10px',
              border: 'none',
              backgroundColor: currentPage === number ? '#3a3a85' : '#f0f0f0',
              color: currentPage === number ? '#fff' : '#333',
              cursor: 'pointer',
              borderRadius: '3px',
            }}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DreamIndex;