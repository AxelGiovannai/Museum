import type { MetObject } from '../types/MetObject';
import ObjectCard from './ObjectCard';

interface SearchResultsProps {
  objects: MetObject[];
}

const SearchResults = ({ objects }: SearchResultsProps) => {
  if (!objects.length) {
    return <p className="text-secondary">No results found</p>;
  }
  return (
    <div className="card-grid">
      {objects.map(object => (
        <ObjectCard key={object.objectID} object={object} />
      ))}
    </div>
  );
};

export default SearchResults;
