import React from "react";
import { Link } from "react-router-dom";

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: "",
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.results !== prevProps.results) {
			this.fetchData();
		}
	}

	componentWillUnmount() {
		this.setState({ results: "" });
	}

	fetchData() {
		if (this.props.results) {
			console.log(this.props.results);
			const albums = this.props.results.albums;
			const artists = this.props.results.artists;
			const res = [];
			albums.forEach(album => {
				res.push(
					<li key={album.imageUrl}>
						<Link to={`/album/${album.id}`}>
							<img className="thumbnail" src={album.imageUrl} alt="Album cover"></img>
							<span>{album.name}</span>
						</Link>
					</li>
				);
			});

			artists.forEach(artist => {
				res.push(
					<li key={artist.imageUrl}>
						<Link to={`/artist/${artist.id}`}>
							<img className="thumbnail" src={artist.imageUrl} alt="Artist"></img>
							<span>{artist.name}</span>
						</Link>
					</li>
				);
			});
			this.setState({ results: res });
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		if (this.props.results) {
			return (
				<div className="search-results">
					<ul>{this.state.results}</ul>
				</div>
			);
		}
		return null;
	}
}

export default SearchResults;
