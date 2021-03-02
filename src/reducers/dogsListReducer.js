const initialState = {
  breeds: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_BREEDS_ARRAY':
      return { ...state, breeds: action.payload };
    default:
      return state;
  }
}
