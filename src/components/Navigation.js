import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

class Navigation extends React.Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="/">Spotify App</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link href="/">New Releases</Nav.Link>
					{
						//<Nav.Link href="/artists">Artists</Nav.Link>
					}
				</Nav>
				<Search />
			</Navbar>
		);
	}
}

export default Navigation;
