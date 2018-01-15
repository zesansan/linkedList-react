import { USER_SIGNIN_FAIL } from "../actions/constants";

const DEFAULT_STATE = {
  token: null,
  error: null
};

const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case USER_SIGNIN_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default userReducer;
