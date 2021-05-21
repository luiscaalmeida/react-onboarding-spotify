export default class AlbumObject {
	constructor(artist, id, imageUrl, name, release_date, total_tracks) {
		this.artist = artist;
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
		this.release_date = release_date;
		this.total_tracks = total_tracks;
	}
}
