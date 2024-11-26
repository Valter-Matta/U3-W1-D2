import { Nav } from "react-bootstrap";

const MyFooter = () => {
	return (
		<footer className="position-fixed w-100 bottom-0 pb-3 bg-secondary">
			<h1 className="p-2 pt-3">Scegli la tua avventura da brivido</h1>
			<Nav
				activeKey="/home"
				onSelect={selectedKey => alert(`selected ${selectedKey}`)}
				className="d-flex justify-content-around w-50 mx-auto fs-3 "
			>
				<Nav.Item>
					<Nav.Link className="text-decoration-none text-dark" href="/home">
						Home
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						className="text-decoration-none text-dark"
						eventKey="link-1"
					>
						Elenco Libri
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						className="text-decoration-none text-dark"
						eventKey="link-2"
					>
						About
					</Nav.Link>
				</Nav.Item>
				<li> &copy; Epic Library {new Date().getFullYear()}</li>
			</Nav>
		</footer>
	);
};

export default MyFooter;
