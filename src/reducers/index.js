import { combineReducers } from 'redux';
import dogPageReducer from './dogPageReducer';
import dogsListReducer from './dogsListReducer';
import homePageReducer from './homePageReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({ dogPage: dogPageReducer, dogsList: dogsListReducer, homePage: homePageReducer, loading: loadingReducer });
export default rootReducer;
