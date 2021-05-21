import React from "react";
import Album from "../components/Album.js";
import API from "../utils/api.js";
import AlbumList from "../components/AlbumList";

class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.url = "https://api.spotify.com/v1/browse/new-releases?country=PT&limit=10&offset=5";
		this.api = new API(this.url);
		this.state = {
			title: "New Releases",
			albums: [],
		};
	}

	async componentDidMount() {
		try {
			const responseJson = await this.api.callApi();
			let albums = responseJson.albums.items.map(album => ({
				"artist": {
					"name": album.artists[0].name,
					"id": album.artists[0].id,
				},
				"imageUrl": album.images[0].url,
				"id": album.id,
				"name": album.name,
				"release_date": album.release_date,
				"total_tracks": album.total_tracks,
			}));
			console.log(albums);
			const albumsHtmlElements = albums.map(album => <Album key={album.id} classes="album" album={album} />);

			this.setState((state, props) => ({
				albums: albumsHtmlElements,
			}));
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return <AlbumList title={this.state.title} albums={this.state.albums} />;
	}
}

export default HomeView;
