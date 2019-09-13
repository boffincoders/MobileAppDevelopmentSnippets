const initialState = {
  loading: false,
  response: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {loading: true, response: null, error: null};
    case 'LOGIN_SUCCESS':
      return {loading: false, response: action.payload, error: null};
    case 'LOGIN_FAIL':
      return {loading: false, response: null, error: action.payload};
    case 'RESET_LOGIN_STATE':
      return {loading: false, response: null, error: action.payload};
    default:
      return initialState;
  }
};
