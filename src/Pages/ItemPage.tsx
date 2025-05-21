import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { MetObject } from '../types/MetObject';
import type { ErrorType } from '../types/ErrorType';
import ObjectDetails from '../components/ObjectDetails';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import NotFoundComponent from '../components/NotFoundComponent';
import { getObject } from '../api/metApi';

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [object, setObject] = useState<MetObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  useEffect(() => {
    const fetchObjectData = async () => {
      if (!id) return;
      try {
        const data = await getObject(id);
        setObject(data);
      } catch (err) {
        setError({
          status: 500,
          message: 'Failed to load object',
          details: err instanceof Error ? err.message : 'Unknown error'
        });
      } finally {
        setLoading(false);
      }
    };
    fetchObjectData();
  }, [id]);

  if (loading) return <Loader />;
  if (error?.status === 404) return <NotFoundComponent message="Object not found" />;
  if (error) return <ErrorMessage error={error} />;
  if (!object) return <NotFoundComponent message="Object not found" />;

  return <ObjectDetails object={object} />;
};

export default ItemPage;
