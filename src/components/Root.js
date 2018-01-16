import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import configureStore from "../store/configure";
import MuiThemeProvider from "materials-ui";

const store = configureStore();

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
