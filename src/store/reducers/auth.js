import { SET_CURRENT_USER } from "../actions/constants";

const DEFAULT_STATE = {
	isAuthenticated: false,
	user: {}
};

const authReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				isAuthenticated: true,
				user: action.user.userId
			};
		default:
			return DEFAULT_STATE;
	}
};

export default authReducer;
