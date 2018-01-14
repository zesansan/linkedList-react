import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  SET_CURRENT_USER
} from "../actions/constants";

const DEFAULT_STATE = {
  username: null,
  firstName: null,
  lastName: null,
  email: null,
  currentCompany: null,
  photo: null,
  experience: [],
  education: [],
  skills: [],
  error: null
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
    case SET_CURRENT_USER: {
      return {...state, ...action.user };
    }
    case USER_SIGNUP_REQUEST:
    case USER_SIGNUP_FAIL:
    default:
      return { ...state };
  }

};

export default userReducer;
