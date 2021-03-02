import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DogsList.css';

const DogsList = ({ breeds }) => (
  <div>
    {breeds.length
      ? (
        <div className="container">
          {breeds.map(breed => (
            <a href={`/dogs/${breed}`} className="button">{breed}</a>
          ))
            }
        </div>
      )
      : (
        <div>
            No Breeds
        </div>
      )}
  </div>
);

DogsList.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DogsList;
