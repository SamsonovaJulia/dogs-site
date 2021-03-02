const initialState = {
  urls: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_IMAGES_URLS':
      return { ...state, urls: action.payload };
    default:
      return state;
  }
}
