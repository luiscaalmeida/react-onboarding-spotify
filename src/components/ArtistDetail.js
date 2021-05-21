import React from "react";

class ArtistDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artistDetail: this.props.artistDetail,
		};
	}

	render() {
		const genres = this.state.artistDetail.genres.map(function (genre, index, array) {
			if (index === array.length - 1) {
				return <span key={genre}>{genre}</span>;
			} else {
				return <span key={genre}>{genre}, </span>;
			}
		});
		if (this.state.artistDetail) {
			return (
				<div className="artist-detail">
					{this.props.children}
					<div className="detail">
						<div className="property">
							<span className="property-name">Followers </span>{" "}
							<span className="property-value">{this.state.artistDetail.followers}</span>
						</div>
						<div className="property">
							<span className="property-name">Popularity </span>{" "}
							<span className="property-value">{this.state.artistDetail.popularity}</span>
						</div>
						<div className="property">
							<span className="property-name">Genres </span> <span className="property-value genres">{genres}</span>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default ArtistDetail;
