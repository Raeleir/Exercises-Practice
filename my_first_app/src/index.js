import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./navbar.js";


class App extends React.Component {
	render() {
		return (
			<div>
			<h1>Hello</h1>
			<h2>It's me</h2>
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
