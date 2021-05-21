import React from "react";
import Album from "../components/Album";
import API from "../utils/api.js";
import NotFound from "../views/NotFound";
import Loading from "../views/Loading";
import AlbumDetail from "../components/AlbumDetail";
import GenericView from "./GenericView";
import BackButton from "../components/BackButton";

class AlbumView extends React.Component {
	constructor(props) {
		console.log("Album View");
		super(props);
		const albumId = props.match.params.id;
		this.url = "https://api.spotify.com/v1/albums/";
		this.api = new API(`${this.url}${albumId}?market=US`);
		this.state = {
			album: "",
			albumDetail: "",
			isError: false,
			isLoading: true,
			albumId: albumId,
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.setState({ albumDetail: "" }); // WHY
			this.fetchData(this.props.match.params.id);
		}
	}

	buildAlbumDetail(response) {
		let album = {
			"artist": {
				"name": response.artists[0].name,
				"id": response.artists[0].id,
			},
			"imageUrl": response.images[0].url,
			"id": response.id,
			"name": response.name,
			"release_date": response.release_date,
			"total_tracks": response.total_tracks,
		};
		let tracks = [];
		let i = 1;
		response.tracks.items.forEach(track => {
			tracks.push({
				"id": i++,
				"name": track.name,
			});
		});
		let albumDetail = {
			"tracks": tracks,
			"label": response.label,
			"popularity": response.popularity,
		};
		return {
			"album": album,
			"albumDetail": albumDetail,
		};
	}

	async fetchData(albumId) {
		this.api.setUrl(`${this.url}${albumId}?market=US`);
		const response = await this.api.callApi();
		let detail = this.buildAlbumDetail(response);
		console.log(detail);
		this.setState((state, props) => ({
			album: detail.album,
			albumDetail: detail.albumDetail,
			isLoading: false,
		}));
	}

	componentDidMount() {
		try {
			this.fetchData(this.state.albumId);
		} catch (error) {
			console.log(error);
			return;
		}
	}

	goBack() {
		this.props.history.goBack();
	}

	render() {
		if (this.state.isError) return <NotFound />;
		if (this.state.album && this.state.albumDetail) {
			return (
				<GenericView title={this.state.album.name}>
					<BackButton onClick={() => this.goBack()} />
					<AlbumDetail albumDetail={this.state.albumDetail}>
						<Album classes="album-solo" album={this.state.album}></Album>
					</AlbumDetail>
				</GenericView>
			);
		}
		return <Loading />;
	}
}

export default AlbumView;
