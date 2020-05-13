import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { TextEditor, CodeEdit } from "./components";
// import "./App.css";

class App extends Component {
  state = {
    codeView: "none",
    textView: "block",
    viewMode: "Code Editor",
  };

  changeView = () => {
    if (this.state.viewMode === "Code Editor")
      this.setState({ viewMode: "Text Editor" }, () => this.shiftMode(0));
    else this.setState({ viewMode: "Code Editor" }, () => this.shiftMode(1));
  };
  shiftMode = (i) => {
    if (i === 0) this.setState({ textView: "none", codeView: "block" });
    else this.setState({ textView: "block", codeView: "none" });
  };

  render() {
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={this.changeView}
            color="secondary"
            style={{ marginTop: "3%" }}
          >
            {this.state.viewMode}
          </Button>
        </div>
        <div
          className="Apps"
          style={{ marginTop: "2%", display: this.state.textView }}
        >
          <TextEditor />
        </div>
        <div className="code">
          <div
            className="cent"
            style={{ display: this.state.codeView, marginTop: "2%" }}
          >
            <CodeEdit />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
