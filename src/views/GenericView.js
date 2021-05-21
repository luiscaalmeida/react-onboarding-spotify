import React from "react";

class GenericView extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="page-title">{this.props.title}</div>
				{this.props.children}
			</div>
		);
	}
}

export default GenericView;
