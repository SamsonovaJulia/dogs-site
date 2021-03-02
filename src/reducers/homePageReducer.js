const initialState = {
  url: '',
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_HOME_IMG_URL':
      return { ...state, url: action.payload };
    default:
      return state;
  }
}
