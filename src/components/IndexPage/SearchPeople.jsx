import { useEffect, useState } from "react";
import axios from "axios";
import Individual from "./Individual";

export default function SearchPeople({ loginUsername, setMapMarkers }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/userposts`)
      .then((response) => {
        const sortedData = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setData(sortedData);
      })
      .catch((e) => console.error("catch", e));
  }, []);

  sessionStorage.setItem('username', loginUsername);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const filterPosts = (posts) => {
    let filtered = posts;

    if (query) {
      filtered = filtered.filter((post) => 
        (post.full_name && post.full_name.toLowerCase().includes(query.toLowerCase())) ||
        (post.title && post.title.toLowerCase().includes(query.toLowerCase()))
      );
    }

    if (activeFilter !== "all") {
      filtered = filtered.filter((post) => {
        const category = post.skybrightness ? post.skybrightness.toLowerCase() : '';
        return category === activeFilter.toLowerCase();
      });
    }

    return filtered;
  };

  const filteredPosts = filterPosts(data);

  useEffect(() => {
    const markerArray = filteredPosts.map((post) => ({
      lat: post.latitude,
      lng: post.longitude,
    }));

    setMapMarkers(markerArray);
  }, [filteredPosts, setMapMarkers]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const setFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const filterCategories = [
    { key: "all", label: "All Posts", emoji: "🌍" },
    { key: "Earth Tremors", label: "Earth Tremors", emoji: "🌋" },
    { key: "Migratory Pattern Shifts", label: "Migratory Pattern Shifts", emoji: "🐦" },
    { key: "Invasive Species Sightings", label: "Invasive Species Sightings", emoji: "🌱" },
    { key: "Unusual Weather", label: "Unusual Weather", emoji: "🌪️" },
    { key: "Wildlife Anomalies", label: "Wildlife Anomalies", emoji: "🦋" },
    { key: "Water Level Changes", label: "Water Level Changes", emoji: "💧" },
    { key: "Anything Else", label: "Anything Else", emoji: "🔍" },
  ];

  return (
    <div className="search-people" style={{
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Roboto', Lato",
      maxWidth: '900px',
      margin: '50px auto',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Community Posts</h1>

      <div className="filters" style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Search for a Post Title..." 
          value={query} 
          onChange={handleQueryChange} 
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '15px',
            width: '250px',
            outline: 'none',
          }}
        />
        {filterCategories.map(({ key, label, emoji }) => (
          <button 
            key={key}
            style={buttonStyle(activeFilter === key)} 
            onClick={() => setFilter(key)}
          >
            {label} {emoji}
          </button>
        ))}
      </div>

      <div className="post-list" style={{ textAlign: 'left' }}>
        {currentPosts.map((post) => (
          <Individual key={post.id} loginUsername={loginUsername} id={post.id} person={post} />
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

const buttonStyle = (isActive) => ({
  padding: '10px 15px',
  margin: '0 5px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: isActive ? '#3a3a85' : '#f0f0f0',
  color: isActive ? '#fff' : '#333',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
});

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
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