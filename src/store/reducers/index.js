import { combineReducers } from "redux";
import companyReducer from "./company";
import userReducer from "./user";
import authReducer from "./auth";

const rootReducer = combineReducers({
	user: userReducer,
	company: companyReducer,
	isAuthenticated: authReducer
});

export default rootReducer;
