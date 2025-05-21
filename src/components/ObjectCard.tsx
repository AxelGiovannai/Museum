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
          <div className="card-footer">
            {object.objectDate && (
              <span className="text-secondary">{object.objectDate}</span>
            )}
            {object.medium && (
              <span className="text-tertiary">{object.medium}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ObjectCard;
