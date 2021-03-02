import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DogPage.css';

const DogPage = ({ urls, breed }) => (
  <div>
    {urls.length
      ? (
        <div className="grid-container">
          {urls.map(url => (
            <div className="item">
              <p key={url}><img className="img-size" src={url} alt={breed} /></p>
            </div>
          ))}
        </div>
      )
      : (
        <div>
                No images
        </div>
      )}
  </div>
);

DogPage.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  breed: PropTypes.string.isRequired,
};


export default DogPage;
