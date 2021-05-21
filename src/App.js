import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import Footer from "./components/Footer";
import AlbumView from "./views/AlbumView";
import ArtistView from "./views/ArtistView";
import NotFound from "./views/NotFound";

//const SearchResultsHide = React.createContext(false);

function App() {
	return (
		<div className="App">
			<Navigation />
			<Switch>
				<Route path="/artist/:id" exact component={ArtistView} />
				<Route path="/album/:id" exact component={AlbumView} />
				<Route path="/" exact component={HomeView} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
