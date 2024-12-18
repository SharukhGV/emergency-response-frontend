import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./dreams.css"
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
    <div className="dream-detail">
      <h1 className="dream-title">{dream.title}</h1>
      <p className="dream-date">
        <strong>Date:</strong> {new Date(dream.date).toLocaleDateString()}
      </p>
      <p className="dream-type">
        <strong>Type:</strong>{' '}
        {dream.isDayDream ? (
          <span className="day-dream">Day Dream</span>
        ) : (
          <span className="night-dream">Night Dream</span>
        )}
      </p>
      <p>
        <strong>Description:</strong>
      </p>
      <p className="dream-description">{dream.description}</p>
      <p className="dream-creator">
        <strong>Created by:</strong> {dream.username}
      </p>
      <Link to="/dreams" className="back-button">
        Back to All Dreams
      </Link>
      <span> </span>
      {loginUsername.loginUsername === dream.username && (
        <Link to={`/dreams/${id}/edit`} className="edit-button">
          Edit Dream
        </Link>
      )}
      {loginUsername.loginUsername === dream.username && (
        <button className="delete-button" onClick={deleteDream}>
          Delete
        </button>
      )}
    </div>
  );

};

export default DreamDetail;