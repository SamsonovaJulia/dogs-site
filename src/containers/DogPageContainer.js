import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DogPage from '../components/DogPage';
import '../styles/DogPage.css';
import getUrls from '../thunks/dogPageThunk';

class DogPageContainer extends Component {
  constructor(props) {
    super(props);
    this.breed = this.props.match.params.breed;
  }

  componentDidMount() {
    this.props.getUrls(this.breed);
  }

  render() {
    const { urls } = this.props;
    return (
      <div>
        <DogPage
          urls={urls}
          breed={this.breed}
        />
      </div>
    );
  }
}

DogPageContainer.propTypes = {
  urls: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({ urls: state.dogPage.urls });
export default connect(mapStateToProps, { getUrls })(DogPageContainer);
