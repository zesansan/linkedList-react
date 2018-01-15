import { combineReducers } from "redux";
import companyReducer from "./company";
import userReducer from "./user";
import authReducer from "./auth";

const rootReducer = combineReducers({
	user: userReducer,
	company: companyReducer,
	auth: authReducer
});

export default rootReducer;
