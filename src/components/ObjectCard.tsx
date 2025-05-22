import { Link } from 'react-router-dom';
import type { MetObject } from '../types/MetObject';
import defaultImage from '../assets/image-not-found.svg';

interface ObjectCardProps {
  object: MetObject;
}

const ObjectCard = ({ object }: ObjectCardProps) => {
  return (
    <div className="card">
      <Link to={`/object/${object.objectID}`} style={{ textDecoration: 'none' }}>
        <img 
          className="card-image" 
          src={object.primaryImageSmall || defaultImage} 
          alt={object.title || 'Artwork image'} 
        />
        <div className="card-content">
          <h3 className="card-title">{object.title || 'Untitled'}</h3>
          {object.artistDisplayName && (
            <p className="card-description">{object.artistDisplayName}</p>
          )}
          {object.objectDate && (
            <div className="text-secondary" style={{ marginTop: '0.5rem' }}>{object.objectDate}</div>
          )}
          {object.medium && (
            <div className="text-tertiary" style={{ marginTop: '0.25rem' }}>{object.medium}</div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ObjectCard;
