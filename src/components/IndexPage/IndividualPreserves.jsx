function IndividualPreserves({ preserve }) {
  return (
    <div className="preserve-card" style={{
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      transition: 'all 0.3s ease-in-out',
      margin: '20px',
      maxWidth: '300px',
      position: 'relative',
    }}>
      <img 
        src={preserve.image} 
        className="preserve-image" 
        alt={preserve.name}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }} 
      />
      <div className="preserve-overlay" style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
        padding: '20px',
        transition: 'all 0.3s ease-in-out',
      }}>
        <div className="preserve-header" style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}>
          <img 
            className="preserve-thumb" 
            src={preserve.image} 
            alt={preserve.name}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '15px',
              border: '2px solid #00fff5',
            }} 
          />
          <h3 className="preserve-title" style={{
            color: '#00fff5',
            margin: 0,
            fontSize: '12px',
            textShadow: '0 0 10px rgba(0, 255, 245, 0.5)',
          }}>
            {preserve.name}
          </h3>
        </div>
        <div className="preserve-details" style={{
          color: '#fff',
          fontSize: '7px',
          marginBottom: '5px',
        }}>
          <strong style={{ color: '#00fff5' }}>Best Time:</strong> {preserve.besttime}
        </div>
        <div className="preserve-details" style={{
          color: '#fff',
          fontSize: '7px',
        }}>
          <strong style={{ color: '#00fff5' }}>Best Locale:</strong> {preserve.bestlocale[0]}
        </div>
      </div>
    </div>
  );
}

export default IndividualPreserves;