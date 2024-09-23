import React from 'react';
// import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404: PAGE NOT FOUND</h1>
      <p>Looks like this page got lost in space!</p>
      <div className="space-scene">
        <div className="stars"></div>
        <div className="earth">
          <div className="earth-surface"></div>
        </div>
        <div className="satellite">
          <div className="satellite-body"></div>
          <div className="satellite-panels"></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;