import { setImagesUrls, toggleLoading } from '../actions/index';

export default breed => (dispatch) => {
  dispatch(toggleLoading(true));
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((respObg) => {
      dispatch(setImagesUrls(respObg.message));
      dispatch(toggleLoading(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(toggleLoading(false));
    });
};
