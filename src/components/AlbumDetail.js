import React from "react";

class AlbumDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			albumDetail: this.props.albumDetail,
			tracksHMTL: "",
		};
	}
	/*
	componentDidUpdate(prevProps) {
		if (this.props.albumDetail !== prevProps.albumDetail) {
			this.fetchData();
		}
	}*/

	fetchData() {
		const tracks = this.state.albumDetail.tracks.map(track => {
			return (
				<li key={track.name}>
					<span className="track-id">{track.id} </span>
					<span className="track-name">{track.name}</span>
				</li>
			);
		});
		this.setState((state, props) => ({
			tracksHMTL: tracks,
		}));
	}

	componentDidMount() {
		try {
			this.fetchData();
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		if (this.state.albumDetail) {
			return (
				<div className="album-detail">
					{this.props.children}
					<div className="detail">
						<div className="property">
							<span className="property-name">Label </span>{" "}
							<span className="property-value">{this.state.albumDetail.label}</span>
						</div>
						<div className="property">
							<span className="property-name">Popularity </span>{" "}
							<span className="property-value">{this.state.albumDetail.popularity}</span>
						</div>
						<div>
							<span className="property-name">Tracks </span> <ul className="tracks">{this.state.tracksHMTL}</ul>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default AlbumDetail;
