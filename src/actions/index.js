export const setBreedsArray = breeds => ({
  type: 'SET_BREEDS_ARRAY',
  payload: breeds,
});

export const setImagesUrls = urls => ({
  type: 'SET_IMAGES_URLS',
  payload: urls,

});

export const toggleLoading = loading => ({
  type: 'TOGGLE_LOODING',
  payload: loading,
});

export const setHomeImgUrl = url => ({
  type: 'SET_HOME_IMG_URL',
  payload: url,
});
