const initialState = {
  loading: false,
  response: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_REQUEST':
      return {loading: true, response: null, error: null};
    case 'REGISTER_SUCCESS':
      return {loading: true, response: action.payload, error: null};
    case 'REGISTER_FAIL':
      return {loading: true, response: null, error: action.payload};
    case 'RESET_REGISTER_STATE':
      return {loading: false, response: null, error: action.payload};
    default:
      return initialState;
  }
};
