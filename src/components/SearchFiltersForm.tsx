import { useState } from 'react';
import type { SearchParams } from '../types/SearchParams';
import type { Department } from '../types/ApiResponse';
import searchIcon from '../assets/search-icon.svg';

interface SearchFiltersFormProps {
  departments: Department[];
  onSearch: (params: SearchParams) => void;
}

const SearchFiltersForm = ({ departments, onSearch }: SearchFiltersFormProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    q: '',
    departmentId: undefined,
    isHighlight: false,
    isOnView: false,
    hasImages: false,
    dateBegin: undefined,
    dateEnd: undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build params dynamically
    const params: Record<string, string | number | boolean> = {};
    // Only include if checked (true)
    if (searchParams.isHighlight) {
      params.isHighlight = true;
    }
    if (searchParams.isOnView) {
      params.isOnView = true;
    }
    if (searchParams.hasImages) {
      params.hasImages = true;
    }
    // Only include if filled
    if (searchParams.departmentId) {
      params.departmentId = searchParams.departmentId;
    }
    // Only include dates if both are filled
    if (
      searchParams.dateBegin !== undefined &&
      searchParams.dateEnd !== undefined &&
      searchParams.dateBegin !== null &&
      searchParams.dateEnd !== null
    ) {
      params.dateBegin = searchParams.dateBegin;
      params.dateEnd = searchParams.dateEnd;
    }
    // Always include q as the last param, even if empty
    params.q = searchParams.q ?? '';
    onSearch(params as SearchParams);
    console.log(params);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="search-filters-form">
      <div className="form-group">
        <label htmlFor="q">Search Term</label>
        <input
          type="text"
          id="q"
          name="q"
          value={searchParams.q}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter search terms..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="departmentId">Department</label>
        <select
          id="departmentId"
          name="departmentId"
          value={searchParams.departmentId}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">All Departments</option>
          {departments.map(dept => (
            <option key={dept.departmentId} value={dept.departmentId}>
              {dept.displayName}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isHighlight"
            checked={searchParams.isHighlight}
            onChange={handleChange}
            className="checkbox-input"
          />
          <span>Show Highlights Only</span>
        </label>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="isOnView"
            checked={searchParams.isOnView}
            onChange={handleChange}
            className="checkbox-input"
          />
          <span>Currently on View</span>
        </label>
      </div>

      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="hasImages"
            checked={searchParams.hasImages}
            onChange={handleChange}
            className="checkbox-input"
          />
          <span>Has Images</span>
        </label>
      </div>

      <div className="form-group date-range">
        <label htmlFor="dateBegin">Date Range</label>
        <div className="date-inputs">
          <input
            type="number"
            id="dateBegin"
            name="dateBegin"
            placeholder="Start Year"
            value={searchParams.dateBegin || ''}
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="number"
            id="dateEnd"
            name="dateEnd"
            placeholder="End Year"
            value={searchParams.dateEnd || ''}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>

      <button type="submit" className="advancedform-search-button">
        <img src={searchIcon} alt="Search" style={{ width: 20, height: 20 }} />
        Search
      </button>
    </form>
  );
};

export default SearchFiltersForm;
