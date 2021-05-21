import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Artist extends React.Component {
	render() {
		return (
			<Card className={this.props.classes}>
				<Card.Img variant="top" src={this.props.artist.imageUrl} />
				<Card.Body>
					<Card.Title>
						<Link to={`/artist/${this.props.artist.id}`}>{this.props.artist.name}</Link>
					</Card.Title>
				</Card.Body>
			</Card>
		);
	}
}

export default Artist;
