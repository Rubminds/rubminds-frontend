import axios from 'axios';
import { takeLatest, put, fork, all, call } from 'redux-saga/effects';
import {
  LOAD_TEAM_MEMBERS,
  LOAD_TEAM_MEMBERS_ERROR,
  LOAD_TEAM_MEMBERS_SUCCESS,
  EVALUATE_TEAM_MEMBERS,
  EVALUATE_TEAM_MEMBERS_ERROR,
  EVALUATE_TEAM_MEMBERS_SUCCESS,
  ADD_TEAM_USER,
  ADD_TEAM_USER_ERROR,
  ADD_TEAM_USER_SUCCESS,
  DELETE_TEAM_USER,
  DELETE_TEAM_USER_ERROR,
  DELETE_TEAM_USER_SUCCESS,
} from '../../constants';

function loadTeamMembersAPI(data) {
  console.log(data);
  return axios.get(`/team/${data}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* loadTeamMembers(action) {
  const result = yield call(loadTeamMembersAPI, action.data);
  try {
    yield put({
      type: LOAD_TEAM_MEMBERS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: LOAD_TEAM_MEMBERS_ERROR,
      error: err,
    });
  }
}

function evaluateTeamMembersAPI(data) {
  return axios.post(`/team/${data.teamId}`, data.content, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* evaluateTeamMembers(action) {
  const result = yield call(evaluateTeamMembersAPI, action.data);
  console.log(result);
  try {
    yield put({
      type: EVALUATE_TEAM_MEMBERS_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: EVALUATE_TEAM_MEMBERS_ERROR,
      error: err,
    });
  }
}

function addTeamUserAPI(data) {
  return axios.post(`/team/${data.teamId}/user/${data.userId}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* addTeamUser(action) {
  console.log(action.data);
  let result;
  try {
    result = yield call(addTeamUserAPI, action.data);
    try {
      yield put({
        type: ADD_TEAM_USER_SUCCESS,
        data: result,
      });
      alert('수락되었습니다');
    } catch (err) {
      yield put({
        type: ADD_TEAM_USER_ERROR,
        error: err,
      });
    }
  } catch (err) {
    alert(err.response.data.error.info);
  }
}

function deleteTeamUserAPI(data) {
  return axios.delete(`/team/${data.teamId}/user/${data.userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
}
function* deleteTeamUser(action) {
  console.log(action.data);
  const result = yield call(deleteTeamUserAPI, action.data);
  try {
    yield put({
      type: DELETE_TEAM_USER_SUCCESS,
      data: result,
    });
  } catch (err) {
    yield put({
      type: DELETE_TEAM_USER_ERROR,
      error: err,
    });
  }
}

function* watchLoadTeamMembers() {
  yield takeLatest(LOAD_TEAM_MEMBERS, loadTeamMembers);
}
function* watchEvaluateTeamMembers() {
  yield takeLatest(EVALUATE_TEAM_MEMBERS, evaluateTeamMembers);
}
function* watchAddTeamUser() {
  yield takeLatest(ADD_TEAM_USER, addTeamUser);
}
function* watchDeleteTeamUser() {
  yield takeLatest(DELETE_TEAM_USER, deleteTeamUser);
}

export default function* teamSaga() {
  yield all([
    fork(watchLoadTeamMembers),
    fork(watchEvaluateTeamMembers),
    fork(watchAddTeamUser),
    fork(watchDeleteTeamUser),
  ]);
}
