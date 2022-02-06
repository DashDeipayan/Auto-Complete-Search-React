import "./App.css";
import { useState, useEffect } from "react";
import { loadItems } from "./utils/api/items";
import { loadPersons } from "./utils/api/persons";
import { loadPlaces } from "./utils/api/places";
import Suggestions from "./components/suggestions";

function App() {
	const [items, setItems] = useState([]);
	const [persons, setPersons] = useState([]);
	const [places, setPlaces] = useState([]);
	const [text, setText] = useState("");
	const [showSugesstion, setShowSuggestion] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			loadItems().then((items) => setItems(items));
		}, 3000);
		setTimeout(() => {
			loadPersons().then((persons) => setPersons(persons));
		}, 5000);
		setTimeout(() => {
			loadPlaces().then((places) => setPlaces(places));
		}, 7000);
	}, []);

	const onChangeHandler = (text) => {
		text.length > 0 ? setShowSuggestion(true) : setShowSuggestion(false);
		setText(text);
	};

	return (
		<div className="App">
			<h1>Type-ahead Search</h1>
			<div className="search-box" style={{}}>
				<input
					className="search-field"
					type="text"
					placeholder="Search"
					value={text}
					onChange={(e) => onChangeHandler(e.target.value)}
					onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
				/>
				{showSugesstion && (
					<>
						<Suggestions
							onSearchSelect={(text) => onChangeHandler(text)}
							setInputText={text}
							categoryTag="items"
							data={items}
						/>
						<Suggestions
							onSearchSelect={(text) => onChangeHandler(text)}
							setInputText={text}
							categoryTag="persons"
							data={persons}
						/>
						<Suggestions
							onSearchSelect={(text) => onChangeHandler(text)}
							setInputText={text}
							categoryTag="places"
							data={places}
						/>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
