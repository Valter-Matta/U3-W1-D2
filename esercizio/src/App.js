import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import books from "./Components/book/fantasy.json";
import Mynav from "./Components/Mynav";
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/MyAlert";

import BookList from "./Components/BookList";

function App() {
	return (
		<div className="App">
			<header>
				<Mynav className=""></Mynav>
				<MyAlert></MyAlert>
			</header>
			<main>
				<BookList books={books}></BookList>
			</main>
			<MyFooter></MyFooter>
		</div>
	);
}

export default App;
