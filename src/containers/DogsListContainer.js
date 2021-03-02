import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/DogsList.css';
import DogsList from '../components/DogsList';
import getBreedsArray from '../thunks/dogsListThunk';

class DogsListContainer extends Component {

  componentDidMount() {
    this.props.getBreedsArray();
  }

  render() {
    const { breeds } = this.props;
    return (
      <div>
        <DogsList
          breeds={breeds}
        />
      </div>

    );
  }
}

DogsListContainer.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({ breeds: state.dogsList.breeds });
export default connect(mapStateToProps, { getBreedsArray })(DogsListContainer);
