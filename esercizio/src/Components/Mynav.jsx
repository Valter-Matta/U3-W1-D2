import { Container, Nav, Navbar } from "react-bootstrap";
import logoFromSrc from "../logo.svg";

const Mynav = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
			<Container fluid className="px-4">
				<Navbar.Brand href="#home" className="d-flex align-items-center">
					<img
						src={logoFromSrc}
						alt=""
						className="d-inline-block align-top"
						width="40"
						height="40"
					/>{" "}
					React Library
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link className="px-4" href="#Home">
							Home
						</Nav.Link>
						<Nav.Link className="px-4" href="#About">
							About
						</Nav.Link>
						<Nav.Link className="px-4" href="#Browse">
							Browse
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Mynav;
