import React from "react";
import { Spinner } from "react-bootstrap";
import GenericView from "./GenericView";

function Loading(props) {
	return (
		<GenericView title="Loading...">
			<div className="loading">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		</GenericView>
	);
}

export default Loading;
