import {delay} from 'redux-saga';
import {takeLatest, put} from 'redux-saga/effects';
import firebase from 'react-native-firebase';

function* loginAction(action) {
  yield put({type: 'LOGIN_REQUEST', payload: null});
  const data = yield firebase
    .auth()
    .signInWithEmailAndPassword(action.value.email, action.value.password)
    .then(data => ({data: data, error: null}))
    .catch(error => ({data: null, error: error}));
  if (data.data != null) {
    yield put({type: 'LOGIN_SUCCESS', payload: data.data});
  } else {
    yield put({type: 'LOGIN_FAIL', payload: data.error});
  }
}
function* resetLogin(action) {
  yield put({type: 'RESET_LOGIN_STATE', payload: null});
}

// register section
function* registerAction(action) {
  yield put({type: 'REGISTER_REQUEST', payload: null});
  const data = yield firebase
    .auth()
    .createUserWithEmailAndPassword(action.value.email, action.value.password)
    .then(data => ({data: data, error: null}))
    .catch(error => ({data: null, error: error}));
  if (data.data != null) {
    yield put({type: 'REGISTER_SUCCESS', payload: data.data});
  } else {
    yield put({type: 'REGISTER_FAIL', payload: data.error});
  }
}
function* resetRegister(action) {
  yield put({type: 'RESET_REGISTER_STATE', payload: null});
}

// register section
function* forgotPasswordAction(action) {
  yield put({type: 'FORGOT_PASSWORD_REQUEST', payload: null});
  const data = yield firebase
    .auth()
    .sendPasswordResetEmail(action.value.email)
    .then(data => ({data: 'Link Shared', error: null}))
    .catch(error => ({data: null, error: error}));
  if (data.data != null) {
    yield put({type: 'FORGOT_PASSWORD_SUCCESS', payload: data.data});
  } else {
    yield put({type: 'FORGOT_PASSWORD_FAIL', payload: data.error});
  }
}
function* resetForgotPassword(action) {
  yield put({type: 'RESET_FORGOT_PASSWORD_STATE', payload: null});
}

export function* rootSaga() {
  //login
  yield takeLatest('LOGIN', loginAction);
  yield takeLatest('RESET_LOGIN', resetLogin);
  //register
  yield takeLatest('REGISTER', registerAction);
  yield takeLatest('RESET_REGISTER', resetRegister);

  //forgot password
  yield takeLatest('FORGOT_PASSWORD', forgotPasswordAction);
  yield takeLatest('RESET_FORGOT_PASSWORD', resetForgotPassword);
}
