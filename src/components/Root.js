import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui";
import App from "./pages/App";
import configureStore from "../store/configure";

const store = configureStore();

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MuiThemeProvider>
					<App />
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default Root;
