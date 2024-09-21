import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DreamIndex = () => {
  const [dreams, setDreams] = useState([]);
  const [filteredDreams, setFilteredDreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dreamType, setDreamType] = useState('all');

  useEffect(() => {
    const fetchDreams = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/dreams`);
        setDreams(response.data.data);
        setFilteredDreams(response.data.data);
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
  }, [searchTerm, dreamType, dreams]);

  return (
    <div
    className="dream-index"
    style={{
    //   backgroundColor: 'whitesmoke',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Roboto', Lato",
    //   color: '#black',
      maxWidth: '900px',
      margin: '50px auto',
      textAlign: 'center',
      backdropFilter: 'blur(5px)',
      transition: 'all 0.3s ease-in-out',
    }}
  >
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
        //   fontFamily: "'Dancing Script', cursive",
          transition: 'box-shadow 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
        onBlur={(e) => (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')}
      />
      <select
        value={dreamType}
        onChange={(e) => setDreamType(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
        //   fontFamily: "'Dancing Script', cursive",
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease',
        }}
        onFocus={(e) => (e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)')}
        onBlur={(e) => (e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)')}
      >
        <option value="all">All Dreams</option>
        <option value="day">Day Dreams</option>
        <option value="night">Night Dreams</option>
      </select>
    </div>
  
    <div className="dream-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      {filteredDreams.map((dream) => (
        <div
          key={dream.id}
          className="dream-card"
          style={{
            // backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border:"solid",
            borderColor:"purple",
            textAlign: 'left',
            transition: 'all 0.3s ease-in-out',
            fontFamily: "'Dancing Script', cursive",
          }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#3a3a85' }}>{dream.title}</h2>
          <p style={{ fontSize: '1rem', color: '#666' }}>{dream.description.substring(0, 100)}...</p>
          <p style={{ fontSize: '0.9rem', color: '#999' }}>Date: {new Date(dream.date).toLocaleDateString()}</p>
          <p
            style={{
              fontSize: '1rem',
              color: dream.isDayDream ? '#ffab91' : '#a1887f',
            }}
          >
            {dream.isDayDream ? 'Day Dream' : 'Night Dream'}
          </p>
          <Link
            to={`/dreams/${dream.id}`}
            style={{
              display: 'inline-block',
              marginTop: '15px',
              padding: '10px 15px',
              backgroundColor: '#3a3a85',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#5050a3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3a3a85')}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default DreamIndex;