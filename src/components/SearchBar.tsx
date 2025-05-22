import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/search-icon.svg';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
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
            opacity: 0.7
          }}
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default SearchBar;
