import React from "react";

import SingleBook from "./SingleBook";

class BookList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchQuery: "",
		};
	}

	//ora devo aggiornare
	handleSearchChange = event => {
		this.setState({ searchQuery: event.target.value });
	};

	render() {
		const { books } = this.props;
		const { searchQuery } = this.state;

		const filteredBooks = books.filter(book =>
			book.title.toLowerCase().includes(searchQuery.toLowerCase()),
		);

		return (
			<div>
				{/* cerca */}
				<div style={{ textAlign: "center", margin: "20px 0" }}>
					<input
						type="text"
						placeholder="Cerca un libro..."
						value={searchQuery}
						onChange={this.handleSearchChange}
						style={{
							padding: "10px",
							width: "50%",
							border: "1px solid #ccc",
							borderRadius: "4px",
						}}
					/>
				</div>

				{/* libri */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					{filteredBooks.map(book => (
						<SingleBook key={book.id} element={book} title={book.title} />
					))}
				</div>
			</div>
		);
	}
}

export default BookList;
