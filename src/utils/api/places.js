import axios from "axios";

export const loadPlaces = async () => {
	const result = await axios.get("http://localhost:8030/places");
	return result.data;
};
