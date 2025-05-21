import type { MetObject } from '../types/MetObject';
import defaultImage from '../assets/image-not-found.svg';

interface ObjectDetailsProps {
  object: MetObject;
}

const ObjectDetails = ({ object }: ObjectDetailsProps) => {
  return (
    <div className="object-details">
      <div className="object-details-grid">
        <div className="object-image-container">
          <img 
            src={object.primaryImage || defaultImage} 
            alt={object.title || 'Artwork'} 
            className="object-image"
          />
        </div>
        
        <div className="object-info">
          <h1 className="object-title">{object.title}</h1>
          
          <section className="info-section">
            <h2>Artist Information</h2>
            {object.artistDisplayName && (
              <p className="info-item">Artist: {object.artistDisplayName}</p>
            )}
            {object.artistDisplayBio && (
              <p className="info-item">Bio: {object.artistDisplayBio}</p>
            )}
            {object.artistNationality && (
              <p className="info-item">Nationality: {object.artistNationality}</p>
            )}
          </section>

          <section className="info-section">
            <h2>Object Details</h2>
            {object.objectDate && <p className="info-item">Date: {object.objectDate}</p>}
            {object.medium && <p className="info-item">Medium: {object.medium}</p>}
            {object.dimensions && <p className="info-item">Dimensions: {object.dimensions}</p>}
            {object.department && <p className="info-item">Department: {object.department}</p>}
            {object.classification && <p className="info-item">Classification: {object.classification}</p>}
          </section>

          {object.tags && object.tags.length > 0 && (
            <section className="info-section">
              <h2>Tags</h2>
              <div className="tags-container">
                {object.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag.term}</span>
                ))}
              </div>
            </section>
          )}

          <section className="info-section">
            <h2>Additional Information</h2>
            {object.creditLine && <p className="info-item">Credit Line: {object.creditLine}</p>}
            {object.repository && <p className="info-item">Repository: {object.repository}</p>}
            <a 
              href={object.objectURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="met-link"
            >
              View on The Met Website
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetails;
