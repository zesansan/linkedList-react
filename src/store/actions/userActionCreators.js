import * as t from "./constants";
import { postRequest } from "../../services/api/index";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import API_URL from './../configure';


export function userSignupRequest(userData) {
  return async function(dispatch) {
    dispatch({ type: t.USER_SIGNUP_REQUEST });
    try {
      const newUser = await postRequest("/users", userData);
      return dispatch(userSignupSuccess(newUser));
    } catch (error) {
      return dispatch(userSignupFail(error));
    }
  };
}

export function userSignupSuccess(user) {
  return {
    type: t.USER_SIGNUP_SUCCESS,
    user
  };
}

export function userSignupFail(error) {
  return {
    type: t.USER_SIGNUP_FAIL,
    error
  };
}

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function signup(userData) {
  return dispatch => {
    return axios.post(`${API_URL}/api/users`, userData);
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${API_URL}/api/users/auth`, data).then(res => {
      const token = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    })
  }
}

export function setCurrentUser(user) {
  return {
    type:t.SET_CURRENT_USER,
    user
  };
}
