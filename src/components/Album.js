import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Album extends React.Component {
	render() {
		return (
			<Card className={this.props.classes}>
				<Card.Img variant="top" src={this.props.album.imageUrl} />
				<Card.Body>
					<Card.Title>
						<Link to={`/album/${this.props.album.id}`}>{this.props.album.name}</Link>
					</Card.Title>
					<Card.Text>
						<span>
							Artist: <Link to={`/artist/${this.props.album.artist.id}`}> {this.props.album.artist.name}</Link>
						</span>
						<br />
						<span>Number of tracks: {this.props.album.total_tracks}</span>
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Release Date: {this.props.album.release_date}</small>
				</Card.Footer>
			</Card>
		);
	}
}

export default Album;
