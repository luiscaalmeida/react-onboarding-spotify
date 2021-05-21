import React from "react";
import { CardDeck } from "react-bootstrap";
import GenericView from "../views/GenericView";

class AlbumList extends React.Component {
	render() {
		return (
			<GenericView title={this.props.title}>
				<CardDeck>{this.props.albums}</CardDeck>;
			</GenericView>
		);
	}
}

export default AlbumList;
