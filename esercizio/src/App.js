import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./Components/Mynav";
import MyFooter from "./Components/MyFooter";
import MyAlert from "./Components/MyAlert";
import AllTheBooks from "./Components/AllTheBooks";

function App() {
	return (
		<div className="App">
			<header>
				<Mynav className=""></Mynav>
				<MyAlert></MyAlert>
			</header>
			<main>
				<AllTheBooks></AllTheBooks>
			</main>
			<MyFooter></MyFooter>
		</div>
	);
}

export default App;
