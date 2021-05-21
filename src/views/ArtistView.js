import React from "react";
import Artist from "../components/Artist";
import API from "../utils/api.js";
import NotFound from "../views/NotFound";
import Loading from "../views/Loading";
import ArtistDetail from "../components/ArtistDetail";
import GenericView from "./GenericView";
import BackButton from "../components/BackButton";

class ArtistView extends React.Component {
	constructor(props) {
		super(props);
		const artistId = props.match.params.id;
		this.url = "https://api.spotify.com/v1/artists/";
		this.api = new API(`${this.url}${artistId}`);
		this.state = {
			artist: "",
			artistDetail: "",
			isError: false,
			isLoading: true,
			artistId: artistId,
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id) {
			this.setState({ artistDetail: "" }); // WHY
			this.fetchData(this.props.match.params.id);
		}
	}

	buildArtistDetail(response) {
		let artist = {
			"imageUrl": response.images[0].url,
			"id": response.id,
			"name": response.name,
		};
		let artistDetail = {
			"genres": response.genres,
			"followers": response.followers.total,
			"popularity": response.popularity,
		};
		return {
			"artist": artist,
			"artistDetail": artistDetail,
		};
	}

	async fetchData(artistId) {
		this.api.setUrl(`${this.url}${artistId}`);
		const response = await this.api.callApi();
		let detail = this.buildArtistDetail(response);
		console.log(detail);
		this.setState((state, props) => ({
			artist: detail.artist,
			artistDetail: detail.artistDetail,
			isLoading: false,
		}));
	}

	componentDidMount() {
		try {
			this.fetchData(this.state.artistId);
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
		if (this.state.artist && this.state.artistDetail) {
			return (
				<GenericView title={this.state.artist.name}>
					<BackButton onClick={() => this.goBack()} />
					<ArtistDetail artistDetail={this.state.artistDetail}>
						<Artist classes="artist-solo" artist={this.state.artist}></Artist>
					</ArtistDetail>
				</GenericView>
			);
		}
		return <Loading />;
	}
}

export default ArtistView;
