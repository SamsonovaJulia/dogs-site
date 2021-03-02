import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const HomePage = ({ url }) => (
  <div>
    {url.length
      ? (
        <div>
          <img src={url} alt={url} />
          <p className="p-padding"><a href="/dogs" className="button-breed">Список собак</a></p>
        </div>
      )
      : (
        <div>
          No images
        </div>
      )}
  </div>
);

HomePage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default HomePage;
