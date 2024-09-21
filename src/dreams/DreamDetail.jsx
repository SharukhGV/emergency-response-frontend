import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const DreamDetail = (loginUsername) => {
  const [dream, setDream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDream = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/dreams/${id}`);
        setDream(response.data.data);
      } catch (error) {
        console.error('Error fetching dream:', error);
        setError('Failed to fetch dream');
      } finally {
        setLoading(false);
      }
    };

    fetchDream();
  }, [id]);

  const deleteDream = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_API}/dreams/${id}`);
      navigate("/dreams");
    } catch (error) {
      console.error("Error deleting dream:", error);
      setError('Failed to delete dream');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!dream) return <div>No dream found</div>;

  return (
    <div
    className="dream-detail"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Roboto', Lato",
      color: '#4a4a4a',
      maxWidth: '600px',
      margin: '50px auto',
      textAlign: 'center',
      transition: 'all 0.3s ease-in-out',
      backdropFilter: 'blur(10px)',
    }}
  >
    <h1 style={{ fontSize: '2.5rem', color: '#3a3a85' }}>{dream.title}</h1>
    <p style={{ fontStyle: 'italic' }}>
      <strong>Date:</strong> {new Date(dream.date).toLocaleDateString()}
    </p>
    <p>
      <strong>Type:</strong>{' '}
      {dream.isDayDream ? (
        <span style={{ color: '#ffab91' }}>Day Dream</span>
      ) : (
        <span style={{ color: '#a1887f' }}>Night Dream</span>
      )}
    </p>
    <p>
      <strong>Description:</strong>
    </p>
    <p style={{ lineHeight: '1.8' }}>{dream.description}</p>
    <p>
      <strong>Created by:</strong> {dream.username}
    </p>
    <Link
      to="/dreams"
      style={{
        display: 'inline-block',
        marginTop: '20px',
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
      Back to All Dreams
    </Link>
    {loginUsername.loginUsername === dream.username && (
      <button
        className="delete-button"
        style={{
          display: 'block',
          marginTop: '20px',
          padding: '10px 15px',
          backgroundColor: '#ff6b6b',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease-in-out',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#ff8787')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#ff6b6b')}
        onClick={deleteDream}
      >
        Delete
      </button>
    )}
  </div>
  
  );
};

export default DreamDetail;