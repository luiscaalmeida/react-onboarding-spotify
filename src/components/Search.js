import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import API from "../utils/api.js";
import SearchResults from "./SearchResults.js";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.url = "https://api.spotify.com/v1/search";
		this.api = new API(this.url);
		this.state = {
			value: "",
			results: "",
			searchResults: "",
		};
	}

	handleSearch(event) {
		this.setState({ value: event.target.value });
	}

	buildArtistOrAlbum(json) {
		let list = [];
		console.log(json);
		json.forEach(element => {
			list.push({
				"name": element.name,
				"imageUrl": element.images[0] ? element.images[0].url : "",
				"id": element.id,
			});
		});
		return list;
	}

	async handleSubmit(event) {
		event.preventDefault();
		if (this.state.value === "") {
			this.setState({ results: "" });
			return;
		}
		this.api.setUrl(`${this.url}?query=${this.state.value}&type=album,artist&offset=0&limit=4`);
		const responseJson = await this.api.callApi();
		console.log(responseJson);
		let albumsJson = responseJson.albums.items;
		let artistsJson = responseJson.artists.items;

		let albums = this.buildArtistOrAlbum(albumsJson);
		let artists = this.buildArtistOrAlbum(artistsJson);

		let searchResults = {
			"artists": [artists[0], artists[1]],
			"albums": [albums[0], albums[1]],
		};

		this.setState({ results: searchResults });
	}

	render() {
		const results = this.state.results ? <SearchResults results={this.state.results} /> : null;
		return (
			<Form className="search-form" inline>
				<FormControl
					type="text"
					placeholder="Search"
					value={this.state.value}
					onChange={event => this.handleSearch(event)}
					className="mr-sm-2"
				/>
				<Button variant="outline-info" onClick={event => this.handleSubmit(event)}>
					Search
				</Button>
				{results}
			</Form>
		);
	}
}

export default Search;
