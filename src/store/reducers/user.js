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
    case USER_SIGNUP_REQUEST: {
      const newUsers = [...state.users, action.newUser];
      return { ...state, users: newUsers };
    }
    case USER_SIGNUP_SUCCESS: {
      const newUsers = [...state.users, action.newUser];
      return { ...state, users: newUsers };
    }
    case USER_SIGNUP_FAIL:
    default:
      return { ...state };
  }
};

export default userReducer;
