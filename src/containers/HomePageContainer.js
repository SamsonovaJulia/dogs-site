import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePage from '../components/HomePage';
import getUrl from '../thunks/homePageThunk';

class HomePageContainer extends Component {

  componentDidMount() {
    this.props.getUrl();
  }

  render() {
    const { loading, url } = this.props;
    if (loading) { return null; }
    return (
      <div>
        <HomePage
          url={url}
        />
      </div>
    );
  }
}

HomePageContainer.propTypes = {
  url: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ url: state.homePage.url, loading: state.loading.loading });
export default connect(mapStateToProps, { getUrl })(HomePageContainer);
