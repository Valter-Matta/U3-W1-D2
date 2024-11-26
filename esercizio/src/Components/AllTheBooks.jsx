import books from "./book/fantasy.json";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AllTheBooks = () => {
	return (
		<Container className="mt-3">
			<Row className="g-3">
				{books.map(book => {
					return (
						<Col className="col-12 col-md-6 col-lg-4">
							<Card className="d-flex justify-content-center">
								<div style={{ height: 400 + "px", width: 100 + "%" }}>
									<Card.Img
										className="w-100 h-100"
										variant="top"
										src={book.img}
									/>
								</div>
								<Card.Body
									className="d-flex flex-column justify-content-around "
									style={{ height: 250 + "px", width: 100 + "%" }}
								>
									<Card.Title className="text-break text-truncate">
										{book.title}
									</Card.Title>
									<Card.Text>
										<p className="text-truncate">{book.category}</p>
										<p className="fs-2 text text-center">{book.price}€</p>
									</Card.Text>
									<Button variant="primary">Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default AllTheBooks;
