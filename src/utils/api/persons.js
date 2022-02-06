import axios from "axios";

export const loadPersons = async () => {
	const result = await axios.get("http://localhost:8020/persons");
	return result.data;
};
