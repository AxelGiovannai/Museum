import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { MetObject } from '../types/MetObject';
import type { ErrorType } from '../types/ErrorType';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { searchObjects, getObject } from '../api/metApi';
import SearchResults from '../components/SearchResults';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      const query = searchParams.get('q');
      if (!query) return;
      setLoading(true);
      setError(null);
      try {
        const data = await searchObjects({ q: query });
        const objectPromises = data.objectIDs?.slice(0, 20).map((id: number) => getObject(id));
        if (objectPromises) {
          const objects = await Promise.all(objectPromises);
          setResults(objects);
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
    fetchResults();
  }, [searchParams]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      <h1>Search Results</h1>
      <SearchResults objects={results} />
    </div>
  );
};

export default SearchResultsPage;
