import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './components/Loading';
import HomePageContainer from './containers/HomePageContainer';
import DogsListContainer from './containers/DogsListContainer';
import DogPageContainer from './containers/DogPageContainer';
import './App.css';


class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePageContainer} />
              <Route path="/dogs/:breed" component={DogPageContainer} />
              <Route path="/dogs" component={DogsListContainer} />
            </Switch>
          </div>
        </Router>
        {loading
          && (
          <Loading />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ loading: state.loading.loading });
export default connect(mapStateToProps)(App);
