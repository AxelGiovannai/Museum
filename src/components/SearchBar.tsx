import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search-icon.svg';
import { searchObjects } from '../api/metApi';
import ErrorMessage from './ErrorMessage';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<{ message: string } | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) {
      setError(null); 
      try {
        const data = await searchObjects({ q: searchTerm.trim() });
        if (data.objectIDs && data.objectIDs.length > 0) {
          navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
        } else {
          setError({ message: 'No results found for your search.' });
        }
      } catch {
        setError({ message: 'An error occurred while searching. Please try again.' });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container" style={{ position: 'relative' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the collection..."
            className="search-input"
            style={{ paddingRight: '2.5rem' }}
          />
          <img
            src={searchIcon}
            alt="Search"
            className="search-input-icon"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 20,
              height: 20,
              cursor: 'pointer',
              opacity: 0.7,
            }}
            onClick={handleSubmit}
          />
        </div>
      </form>
      {error && <ErrorMessage error={{ status: 404, message: error.message }} />}
    </div>
  );
};

export default SearchBar;