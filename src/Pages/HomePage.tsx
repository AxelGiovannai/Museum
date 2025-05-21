import { useState, useEffect } from 'react';
import type { MetObject } from '../types/MetObject';
import ObjectCard from '../components/ObjectCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import type { ErrorType } from '../types/ErrorType';
import { searchObjects, getObject } from '../api/metApi';

const HomePage = () => {
  const [highlights, setHighlights] = useState<MetObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchHighlights = async () => {
      try {
        const data = await searchObjects({ 
          isHighlight: 'true', 
          q: 'prout',
          hasImages: 'true' 
        });
        const objectPromises = data.objectIDs?.slice(0, 5).map((id: number) => getObject(id));
        if (objectPromises) {
          const objects = await Promise.all(objectPromises);
          setHighlights(objects);
        }
      } catch (err) {
        setError({
          status: 500,
          message: 'Failed to load highlights',
          details: err instanceof Error ? err.message : 'Unknown error'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchHighlights();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="bg-primary">
      <h1 className="text-primary">Featured Highlights</h1>
      <div className="card-grid">
        {highlights.map(object => (
          <ObjectCard key={object.objectID} object={object} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
