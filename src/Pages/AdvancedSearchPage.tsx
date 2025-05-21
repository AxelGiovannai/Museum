import { useState, useEffect } from 'react';
import type { MetObject } from '../types/MetObject';
import type { Department } from '../types/ApiResponse';
import type { SearchParams } from '../types/SearchParams';
import type { ErrorType } from '../types/ErrorType';
import SearchFiltersForm from '../components/SearchFiltersForm';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { getDepartments, searchObjects, getObject } from '../api/metApi';
import SearchResults from '../components/SearchResults';

const AdvancedSearchPage = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [searchResults, setSearchResults] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchDepartmentsList = async () => {
      try {
        const data = await getDepartments();
        setDepartments(data.departments || []);
      } catch (err) {
        setError({
          status: 500,
          message: 'Failed to load departments',
          details: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    };
    fetchDepartmentsList();
  }, []);

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchObjects(params as Record<string, string | number | boolean | undefined>);
      const objectPromises = data.objectIDs?.slice(0, 20).map((id: number) => getObject(id));
      if (objectPromises) {
        const objects = await Promise.all(
          objectPromises.map((p: Promise<MetObject>) => p.catch(() => null))
        );
        let filteredObjects = objects.filter(obj => obj !== null);
        if (params.hasImages) {
          filteredObjects = filteredObjects.filter(obj => obj.primaryImage || obj.primaryImageSmall);
        }
        setSearchResults(filteredObjects);
      }
    } catch (err) {
      setError({
        status: 500,
        message: 'Search failed',
        details: err instanceof Error ? err.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  if (error) return <ErrorMessage error={error} />;

  return (
    <div style={{ marginTop: '2rem' }}>
      <SearchFiltersForm departments={departments} onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2>Search Results</h2>
          <SearchResults objects={searchResults} />
        </div>
      )}
    </div>
  );
};

export default AdvancedSearchPage;
