const initialState = {
  loading: false,
  response: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FORGOT_PASSWORD_REQUEST':
      return {loading: true, response: null, error: null};
    case 'FORGOT_PASSWORD_SUCCESS':
      return {loading: false, response: action.payload, error: null};
    case 'FORGOT_PASSWORD_FAIL':
      return {loading: false, response: null, error: action.payload};
    case 'RESET_FORGOT_PASSWORD_STATE':
      return {loading: false, response: null, error: action.payload};
    default:
      return initialState;
  }
};
