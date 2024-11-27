import React from "react";
import { Col, Card, Button } from "react-bootstrap";

class SingleBook extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: false,
		};
	}

	toggleSelected = () => {
		this.setState(prevState => ({
			selected: !prevState.selected,
		}));
	};
	render() {
		const { element } = this.props; // objlibro
		const { selected } = this.state; //false
		console.log("azoooo", element);

		return (
			<Col className="col-12 col-md-6 col-lg-4">
				<Card
					className="d-flex justify-content-center"
					style={{
						border: selected ? 3 + "px solid red" : 1 + "px solid #ccc",
						cursor: "pointer",
					}}
					onClick={this.toggleSelected}
				>
					<div style={{ height: "400px", width: "100%" }}>
						<Card.Img className="w-100 h-100" variant="top" src={element.img} />
					</div>
					<Card.Body
						className="d-flex flex-column justify-content-around"
						style={{ height: "250px", width: "100%" }}
					>
						<Card.Title className="text-break text-truncate">
							{element.title}
						</Card.Title>
						<Card.Text>
							<p className="text-truncate">{element.category}</p>
							<p className="fs-2 text text-center">{element.price}€</p>
						</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
