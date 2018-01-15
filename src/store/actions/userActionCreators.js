import * as t from "./constants";
import { postRequest } from "../../services/api/index";
import axios from "axios";
import jwtDecode from "jwt-decode";

export function userSignupRequest(userData) {
  return async function(dispatch) {
    try {
      const newUser = await axios.post(`${t.API_URL}/users/signup`, userData);
      const token = newUser.data.token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      return dispatch(setCurrentUser(jwtDecode(token)));
    } catch (error) {
      return dispatch(userSignupFail(error));
    }
  };
}

export function userSignupFail(error) {
  return {
    type: t.USER_SIGNUP_FAIL,
    error
  };
}

export function userSigninFail(error) {
  return {
    type: t.USER_SIGNIN_FAIL,
    error
  };
}
export function setCurrentUser(user) {
  return {
    type: t.SET_CURRENT_USER,
    user
  };
}
export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return async function(dispatch) {
    try {
      const newUser = axios.post(`${t.API_URL}/users/signin`, data);
      const token = newUser.data.token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      return dispatch(setCurrentUser(jwtDecode(token)));
    } catch (error) {
      return dispatch(userSigninFail(error));
    }
  };
}
