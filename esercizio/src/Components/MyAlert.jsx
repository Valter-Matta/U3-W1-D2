import { Alert, Button } from "react-bootstrap";
import { useState } from "react";

function MyAlert() {
	const [show, setShow] = useState(true);

	return (
		<>
			<Alert
				show={show}
				variant="success"
				className="position-absolute w-50 top-0 start-0 z-1 "
			>
				<Alert.Heading>Benvenuto</Alert.Heading>
				<p>Cerca i tuoi libri preferiti</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button onClick={() => setShow(false)} variant="outline-success">
						Close me
					</Button>
				</div>
			</Alert>

			{!show && (
				<Button
					className="position-absolute top-0 start-50 z-1"
					onClick={() => setShow(true)}
				>
					Show Alert
				</Button>
			)}
		</>
	);
}

export default MyAlert;
