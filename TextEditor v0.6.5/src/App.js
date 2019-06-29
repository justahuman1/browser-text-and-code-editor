import React, { Component } from "react";

import { TextEditor, CodeEdit } from "./components";
import "./App.css";

class App extends Component {

	state = {
		currentview:false
	}



	render() {
		return (
			<div className="App">
				<div className="Apps" style={{marginTop:'10%'}}>
					<TextEditor />
				</div>
				<div className="code">
					<div class="cent">
						<CodeEdit />
					</div>
				</div>

			</div>
		);
	}
}

export default App;
