import { setHomeImgUrl, toggleLoading } from '../actions/index';

export default breed => (dispatch) => {
  dispatch(toggleLoading(true));
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
    })
    .then((dogObg) => {
      dispatch(setHomeImgUrl(dogObg.message));
      dispatch(toggleLoading(false));
    })
    .catch((error) => {
      console.log(error);
      dispatch(toggleLoading(false));
    });
};
