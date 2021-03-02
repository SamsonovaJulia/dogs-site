import { setBreedsArray, toggleLoading } from '../actions/index';

export default breed => (dispatch) => {
  dispatch(toggleLoading(true));
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((respObg) => {
      dispatch(setBreedsArray(Object.keys(respObg.message)));
      dispatch(toggleLoading(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(toggleLoading(false));
    });
};
