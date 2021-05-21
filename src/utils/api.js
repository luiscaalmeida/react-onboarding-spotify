export default class API {
	constructor(url) {
		this.url = url;
		this.ACCESS_TOKEN = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN;
		this.headers = {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"Authorization": `Bearer ${this.ACCESS_TOKEN}`,
		};
	}

	setUrl(url) {
		this.url = url;
	}

	async callApi() {
		try {
			const response = await fetch(this.url, { headers: this.headers });
			console.log("STATUS: " + response.status);

			const responseData = await response.json();
			console.log(responseData);
			return responseData;
		} catch (error) {
			console.log(error);
			return new Error();
		}
	}
}
