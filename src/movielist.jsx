import  { useEffect, useState } from 'react';

const movielist = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const style={
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
            }

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>🎬 Movie List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={style}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: ⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default movielist;
