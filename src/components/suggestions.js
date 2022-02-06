import { useState, useEffect } from "react";
import "./suggestions.css";

const Suggestions = ({ data, setInputText, onSearchSelect }) => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		suggestionsHandler(data, setInputText);
	}, [data, setInputText]);

	const suggestionsHandler = (datas, text) => {
		let matches = [];
		if (text.length > 0) {
			matches = datas.filter((data) => data.name.startsWith(text));
		}
		setSuggestions(matches);
	};

	return (
		<div className={setInputText && "suggestions-box"}>
			{suggestions.map((suggestion) => (
				<div
					key={suggestion.id}
					className="suggestions"
					onClick={() => {
						onSearchSelect(suggestion.name);
					}}
				>
					{suggestion.name}
				</div>
			))}
		</div>
	);
};

export default Suggestions;
