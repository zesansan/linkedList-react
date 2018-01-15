import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAIL,
	SET_CURRENT_USER
} from "../actions/constants";

const DEFAULT_STATE = {
	isAuthenticated: false,
	user: {}
};

const authReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: false,
				user: action.user
			};
		default:
			return DEFAULT_STATE;
	}
};

export default authReducer;
