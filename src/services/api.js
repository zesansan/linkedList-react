import axios from "axios";
const callAPI = () => {
	return axios
		.get("http://localhost:3001/users")
		.then(res => {
			return res.data;
		})
		.catch(err => {
			return err;
		});
};

export default callAPI;
