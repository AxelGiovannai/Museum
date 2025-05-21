import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/advanced-search" className="nav-link">Advanced Search</Link>
        </nav>
        <div className="search-container">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
