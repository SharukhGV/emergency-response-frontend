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
    <div className="dream-index">
      <h1>Dream Journal</h1>
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search dreams..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={dreamType} 
          onChange={(e) => setDreamType(e.target.value)}
        >
          <option value="all">All Dreams</option>
          <option value="day">Day Dreams</option>
          <option value="night">Night Dreams</option>
        </select>
      </div>

      <div className="dream-list">
        {filteredDreams.map(dream => (
          <div key={dream.id} className="dream-card">
            <h2>{dream.title}</h2>
            <p>{dream.description.substring(0, 100)}...</p>
            <p>Date: {new Date(dream.date).toLocaleDateString()}</p>
            <p>{dream.isDayDream ? 'Day Dream' : 'Night Dream'}</p>
            <Link to={`/dreams/${dream.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DreamIndex;