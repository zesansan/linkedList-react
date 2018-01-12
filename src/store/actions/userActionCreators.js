import * as t from "./constants";
import { getRequest, postRequest } from "../../../services/api";

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
