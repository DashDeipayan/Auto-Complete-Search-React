import axios from "axios";

export const loadItems = async () => {
	const result = await axios.get("http://localhost:8010/items");
	return result.data;
};
