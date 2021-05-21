import React from "react";

class BackButton extends React.Component {
	render() {
		return (
			<button className="btn btn-success backButton" onClick={() => this.props.onClick()}>
				Back
			</button>
		);
	}
}

export default BackButton;
